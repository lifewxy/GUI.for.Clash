import i18n from '@/lang'
import { sampleID } from '@/utils'
import { ProxyGroup, RulesetBehavior, RulesetFormat } from '@/constant'
import type { ProfileType } from '@/stores'

const { t } = i18n.global

export const GeneralConfigDefaults = (): ProfileType['generalConfig'] => ({
  mode: 'rule',
  ipv6: false,
  'mixed-port': 20112,
  'allow-lan': false,
  'log-level': 'silent',
  'interface-name': ''
})

export const AdvancedConfigDefaults = (): ProfileType['advancedConfig'] => ({
  port: 0,
  'socks-port': 0,
  secret: sampleID(),
  'external-controller': '127.0.0.1:20113',
  'external-ui': '',
  'keep-alive-interval': 30,
  'find-process-mode': 'strict',
  'external-controller-tls': '',
  'external-ui-name': '',
  'external-ui-url': '',
  'unified-delay': true,
  'tcp-concurrent': true,
  authentication: [],
  'skip-auth-prefixes': ['127.0.0.1/8', '::1/128'],
  tls: {
    certificate: '',
    'private-key': ''
  },
  'global-client-fingerprint': 'chrome',
  'geodata-mode': false,
  'geo-auto-update': false,
  'geo-update-interval': 24,
  'geodata-loader': 'standard',
  'geosite-matcher': 'mph',
  'geox-url': {
    geoip: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat',
    geosite: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat',
    mmdb: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb',
    asn: 'https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb'
  },
  'global-ua': 'chrome',
  profile: {
    'store-selected': true,
    'store-fake-ip': true
  },
  'lan-allowed-ips': ['0.0.0.0/0', '::/0'],
  'lan-disallowed-ips': []
})

export const TunConfigDefaults = (): ProfileType['tunConfig'] => ({
  enable: false,
  stack: 'Mixed',
  'auto-route': true,
  'route-address': ['0.0.0.0/1', '128.0.0.0/1', '::/1', '8000::/1'],
  'auto-detect-interface': true,
  'dns-hijack': ['any:53'],
  device: 'utun_clash',
  mtu: 9000,
  'strict-route': true,
  'endpoint-independent-nat': false
})

export const DnsConfigDefaults = (): ProfileType['dnsConfig'] => ({
  enable: false,
  listen: '',
  ipv6: false,
  'use-hosts': false,
  'use-system-hosts': true,
  'default-nameserver': [],
  nameserver: ['https://223.5.5.5/dns-query'],
  'proxy-server-nameserver': [],
  'nameserver-policy': {},
  'enhanced-mode': 'fake-ip',
  'fake-ip-range': '198.18.0.1/16',
  'fake-ip-filter-mode': 'blacklist',
  'fake-ip-filter': [
    '*.lan',
    '*.localdomain',
    '*.example',
    '*.invalid',
    '*.localhost',
    '*.test',
    '*.local',
    '*.home.arpa',
    '*.msftconnecttest.com',
    '*.msftncsi.com'
  ],
  fallback: [],
  'fallback-filter': {
    geoip: true,
    'geoip-code': 'CN',
    geosite: ['gfw'],
    ipcidr: ['240.0.0.0/4'],
    domain: ['+.google.com', '+.facebook.com', '+.youtube.com']
  },
  'prefer-h3': false,
  hosts: {}
})

export const ProxyGroupsConfigDefaults = (ids: string[]): ProfileType['proxyGroupsConfig'] => {
  return [
    {
      id: ids[0],
      name: t('kernel.proxyGroups.built-in.select'),
      type: ProxyGroup.Select,
      proxies: [{ id: ids[1], type: 'Built-In', name: t('kernel.proxyGroups.built-in.auto') }],
      url: 'https://www.gstatic.com/generate_204',
      interval: 300,
      strategy: 'consistent-hashing',
      use: [],
      tolerance: 150,
      lazy: true,
      'disable-udp': false,
      filter: '',
      'exclude-filter': '',
      hidden: false,
      icon: ''
    },
    {
      id: ids[1],
      name: t('kernel.proxyGroups.built-in.auto'),
      type: ProxyGroup.UrlTest,
      proxies: [],
      url: 'https://www.gstatic.com/generate_204',
      interval: 300,
      strategy: 'consistent-hashing',
      use: [],
      tolerance: 150,
      lazy: true,
      'disable-udp': false,
      filter: '',
      'exclude-filter': '',
      hidden: false,
      icon: ''
    },
    {
      id: ids[2],
      name: t('kernel.proxyGroups.built-in.direct'),
      type: ProxyGroup.Select,
      proxies: [
        { id: 'DIRECT', type: 'Built-In', name: 'DIRECT' },
        { id: 'REJECT', type: 'Built-In', name: 'REJECT' }
      ],
      url: 'https://www.gstatic.com/generate_204',
      interval: 300,
      strategy: 'consistent-hashing',
      use: [],
      tolerance: 150,
      lazy: true,
      'disable-udp': false,
      filter: '',
      'exclude-filter': '',
      hidden: false,
      icon: ''
    },
    {
      id: ids[3],
      name: t('kernel.proxyGroups.built-in.reject'),
      type: ProxyGroup.Select,
      proxies: [
        { id: 'REJECT', type: 'Built-In', name: 'REJECT' },
        { id: 'DIRECT', type: 'Built-In', name: 'DIRECT' }
      ],
      url: 'https://www.gstatic.com/generate_204',
      interval: 300,
      strategy: 'consistent-hashing',
      use: [],
      tolerance: 150,
      lazy: true,
      'disable-udp': false,
      filter: '',
      'exclude-filter': '',
      hidden: false,
      icon: ''
    },
    {
      id: ids[4],
      name: t('kernel.proxyGroups.built-in.fallback'),
      type: ProxyGroup.Select,
      proxies: [
        { id: ids[0], type: 'Built-In', name: t('kernel.proxyGroups.built-in.select') },
        { id: ids[2], type: 'Built-In', name: t('kernel.proxyGroups.built-in.direct') }
      ],
      url: 'https://www.gstatic.com/generate_204',
      interval: 300,
      strategy: 'consistent-hashing',
      use: [],
      tolerance: 150,
      lazy: true,
      'disable-udp': false,
      filter: '',
      'exclude-filter': '',
      hidden: false,
      icon: ''
    }
  ]
}

export const RulesConfigDefaults = (ids: string[]): ProfileType['rulesConfig'] => [
  {
    id: sampleID(),
    type: 'LOGIC',
    payload: 'AND,((DST-PORT,443),(NETWORK,udp))',
    proxy: ids[3],
    'no-resolve': false,
    'ruleset-name': '',
    'ruleset-type': 'file',
    'ruleset-behavior': RulesetBehavior.Domain,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'RULE-SET',
    payload:
      'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-ads-all.mrs',
    proxy: ids[3],
    'no-resolve': false,
    'ruleset-name': 'category-ads-all',
    'ruleset-type': 'http',
    'ruleset-behavior': RulesetBehavior.Domain,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'RULE-SET',
    payload:
      'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs',
    proxy: ids[2],
    'no-resolve': true,
    'ruleset-name': 'GEOIP-Private',
    'ruleset-type': 'http',
    'ruleset-behavior': RulesetBehavior.Ipcidr,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'RULE-SET',
    payload: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs',
    proxy: ids[2],
    'no-resolve': true,
    'ruleset-name': 'GEOIP-CN',
    'ruleset-type': 'http',
    'ruleset-behavior': RulesetBehavior.Ipcidr,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'RULE-SET',
    payload:
      'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs',
    proxy: ids[2],
    'no-resolve': false,
    'ruleset-name': 'GEOSITE-Private',
    'ruleset-type': 'http',
    'ruleset-behavior': RulesetBehavior.Domain,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'RULE-SET',
    payload: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs',
    proxy: ids[2],
    'no-resolve': false,
    'ruleset-name': 'GEOSITE-CN',
    'ruleset-type': 'http',
    'ruleset-behavior': RulesetBehavior.Domain,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'RULE-SET',
    payload:
      'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/geolocation-!cn.mrs',
    proxy: ids[0],
    'no-resolve': false,
    'ruleset-name': 'geolocation-!cn',
    'ruleset-type': 'http',
    'ruleset-behavior': RulesetBehavior.Domain,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  },
  {
    id: sampleID(),
    type: 'MATCH',
    payload: '',
    proxy: ids[4],
    'no-resolve': false,
    'ruleset-name': '',
    'ruleset-type': 'file',
    'ruleset-behavior': RulesetBehavior.Domain,
    'ruleset-format': RulesetFormat.Mrs,
    'ruleset-proxy': ids[2]
  }
]

export const MixinConfigDefaults = (): ProfileType['mixinConfig'] => {
  return { priority: 'mixin', config: '' }
}

export const ScriptConfigDefaults = (): ProfileType['scriptConfig'] => {
  return { code: `const onGenerate = async (config) => {\n  return config\n}` }
}
