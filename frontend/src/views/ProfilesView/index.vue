<script setup lang="ts">
import { useI18n, I18nT } from 'vue-i18n'

import { ClipboardSetText } from '@/bridge'
import { DraggableOptions } from '@/constant'
import { View } from '@/enums/app'
import {
  type ProfileType,
  useProfilesStore,
  useAppSettingsStore,
  useKernelApiStore,
  useSubscribesStore,
  usePluginsStore,
} from '@/stores'
import {
  debounce,
  deepClone,
  generateConfig,
  sampleID,
  stringifyNoFolding,
  message,
  alert,
} from '@/utils'

import { useModal } from '@/components/Modal'

import ProfileForm from './components/ProfileForm.vue'

import type { Menu } from '@/types/app'

const { t } = useI18n()
const [Modal, modalApi] = useModal({})
const profilesStore = useProfilesStore()
const subscribesStore = useSubscribesStore()
const appSettingsStore = useAppSettingsStore()
const kernelApiStore = useKernelApiStore()
const pluginsStore = usePluginsStore()

const menuList: Menu[] = [
  'profile.step.name',
  'profile.step.general',
  'profile.step.tun',
  'profile.step.dns',
  'profile.step.groups',
  'profile.step.rules',
  'profile.step.mixin-script',
].map((v, i) => {
  return {
    label: v,
    handler: (id: string) => {
      const p = profilesStore.getProfileById(id)
      p && handleShowProfileForm(p.id, i)
    },
  }
})

const secondaryMenusList: Menu[] = [
  {
    label: 'profiles.start',
    handler: async (id: string) => {
      appSettingsStore.app.kernel.profile = id
      try {
        await kernelApiStore.startKernel()
      } catch (error: any) {
        message.error(error)
        console.error(error)
      }
    },
  },
  {
    label: 'profiles.copy',
    handler: async (id: string) => {
      const p = deepClone(profilesStore.getProfileById(id)!)
      p.id = sampleID()
      p.name = p.name + '(Copy)'
      profilesStore.addProfile(p)
      message.success('common.success')
    },
  },
  {
    label: 'profiles.copytoClipboard',
    handler: async (id: string) => {
      const p = profilesStore.getProfileById(id)!
      try {
        const config = await generateConfig(p)
        const str = stringifyNoFolding(config)
        const ok = await ClipboardSetText(str)
        if (!ok) throw 'ClipboardSetText Error'
        message.success('common.success')
      } catch (error: any) {
        message.error(error.message || error)
      }
    },
  },
  {
    label: 'profiles.generateAndView',
    handler: async (id: string) => {
      const p = profilesStore.getProfileById(id)!
      try {
        const config = await generateConfig(p)
        alert(p.name, stringifyNoFolding(config))
      } catch (error: any) {
        message.error(error.message || error)
      }
    },
  },
]

const generateMenus = (profile: ProfileType) => {
  const moreMenus: Menu[] = secondaryMenusList.map((v) => ({
    ...v,
    handler: () => v.handler?.(profile.id),
  }))
  const builtInMenus: Menu[] = [
    ...menuList.map((v) => ({ ...v, handler: () => v.handler?.(profile.id) })),
    {
      label: '',
      separator: true,
    },
    {
      label: 'common.more',
      children: moreMenus,
    },
  ]

  const contextMenus = pluginsStore.plugins.filter(
    (plugin) => Object.keys(plugin.context.profiles).length !== 0,
  )

  if (contextMenus.length !== 0) {
    moreMenus.push(
      {
        label: '',
        separator: true,
      },
      ...contextMenus.reduce((prev, plugin) => {
        const menus = Object.entries(plugin.context.profiles)
        return prev.concat(
          menus.map(([title, fn]) => {
            return {
              label: title,
              handler: async () => {
                try {
                  plugin.running = true
                  await pluginsStore.manualTrigger(plugin.id, fn as any, profile)
                } catch (error: any) {
                  message.error(error)
                } finally {
                  plugin.running = false
                }
              },
            }
          }),
        )
      }, [] as Menu[]),
    )
  }

  return builtInMenus
}

const handleShowProfileForm = (id?: string, step = 0) => {
  modalApi.setProps({
    minWidth: '70',
    onOk: async () => {
      const { running, profile } = appSettingsStore.app.kernel
      if (running && profile === id) {
        await kernelApiStore.restartKernel()
      }
    },
  })
  modalApi.setContent(ProfileForm, { id, step }).open()
}

const handleDeleteProfile = async (p: ProfileType) => {
  const { profile, running } = appSettingsStore.app.kernel
  if (profile === p.id && running) {
    message.warn('profiles.shouldStop')
    return
  }

  try {
    await profilesStore.deleteProfile(p.id)
  } catch (error: any) {
    console.error('deleteProfile: ', error)
    message.error(error)
  }
}

const handleUseProfile = async (p: ProfileType) => {
  if (appSettingsStore.app.kernel.profile === p.id) return

  appSettingsStore.app.kernel.profile = p.id

  if (appSettingsStore.app.kernel.running) {
    await kernelApiStore.restartKernel()
  }
}

const isCreatedBySubscription = (id: string) => {
  return !!subscribesStore.getSubscribeById(id)
}

const showAuto = () => alert('Tips', 'profile.auto')

const onSortUpdate = debounce(profilesStore.saveProfiles, 1000)
</script>

<template>
  <div v-if="profilesStore.profiles.length === 0" class="grid-list-empty">
    <Empty>
      <template #description>
        <I18nT keypath="profiles.empty" tag="div" scope="global" class="flex items-center mt-12">
          <template #action>
            <Button @click="handleShowProfileForm()" type="link">{{ t('common.add') }}</Button>
          </template>
        </I18nT>
      </template>
    </Empty>
  </div>

  <div v-else class="grid-list-header">
    <Radio
      v-model="appSettingsStore.app.profilesView"
      :options="[
        { label: 'common.grid', value: View.Grid },
        { label: 'common.list', value: View.List },
      ]"
      class="mr-auto"
    />
    <Button @click="handleShowProfileForm()" type="primary" icon="add">
      {{ t('common.add') }}
    </Button>
  </div>

  <div
    v-draggable="[profilesStore.profiles, { ...DraggableOptions, onUpdate: onSortUpdate }]"
    :class="'grid-list-' + appSettingsStore.app.profilesView"
  >
    <Card
      v-for="p in profilesStore.profiles"
      :key="p.id"
      :title="p.name"
      :selected="appSettingsStore.app.kernel.profile === p.id"
      @dblclick="handleUseProfile(p)"
      v-menu="generateMenus(p)"
      class="grid-list-item"
    >
      <template #title-prefix>
        <Tag
          v-if="isCreatedBySubscription(p.id)"
          @click="showAuto"
          color="primary"
          style="margin-left: 0"
        >
          {{ t('common.auto') }}
        </Tag>
      </template>

      <template v-if="appSettingsStore.app.profilesView === View.Grid" #extra>
        <Dropdown :trigger="['hover', 'click']">
          <Button type="link" size="small" icon="more" />
          <template #overlay>
            <div class="flex flex-col gap-4 min-w-64 p-4">
              <Button @click="handleUseProfile(p)" type="text" size="small">
                {{ t('common.use') }}
              </Button>
              <Button @click="handleShowProfileForm(p.id)" type="text" size="small">
                {{ t('common.edit') }}
              </Button>
              <Button @click="handleDeleteProfile(p)" type="text" size="small">
                {{ t('common.delete') }}
              </Button>
            </div>
          </template>
        </Dropdown>
      </template>

      <template v-else #extra>
        <Button @click="handleUseProfile(p)" type="text" size="small">
          {{ t('common.use') }}
        </Button>
        <Button @click="handleShowProfileForm(p.id)" type="text" size="small">
          {{ t('common.edit') }}
        </Button>
        <Button @click="handleDeleteProfile(p)" type="text" size="small">
          {{ t('common.delete') }}
        </Button>
      </template>
      <div>
        {{ t('profiles.proxyGroups') }}
        :
        {{ p.proxyGroupsConfig.length }}
        /
        {{ t('profiles.rules') }}
        :
        {{ p.rulesConfig.length }}
      </div>
      <div>
        TUN :
        {{ p.tunConfig.enable ? t('common.enabled') : t('common.disabled') }}
        / DNS :
        {{ p.dnsConfig.enable ? t('common.enabled') : t('common.disabled') }}
      </div>
      <div>
        Http :
        {{ p.advancedConfig.port || '--' }}
        Socks :
        {{ p.advancedConfig['socks-port'] || '--' }}
        Mixed :
        {{ p.generalConfig['mixed-port'] || '--' }}
      </div>
    </Card>
  </div>

  <Modal />
</template>
