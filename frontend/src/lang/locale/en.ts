export default {
  common: {
    grid: 'Grid',
    list: 'List',
    add: 'Add',
    added: 'Added',
    more: 'More',
    edit: 'Edit',
    clear: 'Clear',
    update: 'Update',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    nextStep: 'Next',
    prevStep: 'Back',
    disabled: 'Disabled',
    enabled: 'Enabled',
    preview: 'Preview',
    warning: 'Warning',
    disable: 'Disable',
    enable: 'Enable',
    use: 'Use',
    none: 'none',
    close: 'Close',
    reset: 'Reset',
    pause: 'Pause',
    resume: 'Resume',
    details: 'Details',
    updateAll: 'Update All',
    updateTime: 'Update Time',
    keywords: 'Keywords',
    success: 'Success',
    copy: 'Copy',
    copied: 'Copied',
    auto: 'Auto',
    import: 'Import',
    install: 'Install',
    uninstall: 'Uninstall',
    run: 'Run',
    refresh: 'Refresh',
    confirm: 'OK',
    selectAll: 'Select All',
    http: 'Remote',
    file: 'Local',
    inline: 'Inline',
    manual: 'Manual',
    openFile: 'Open File',
    develop: 'Develop',
    canceled: 'Canceled',
    downloading: 'Downloading...',
  },
  kernel: {
    port: 'HTTP(s) Port',
    mode: 'Mode',
    ipv6: 'IPv6',
    secret: 'RESTful API Secret',
    'socks-port': 'SOCKS5 Port',
    'mixed-port': 'Mixed Port',
    'allow-lan': 'Allow Lan',
    'disallow-lan': 'Disallow Lan',
    'log-level': 'Log Level',
    'external-controller': 'External Controller',
    'external-ui': 'External UI',
    'interface-name': 'Interface Name',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
    debug: 'Debug',
    silent: 'Silent',
    rule: 'Rule',
    global: 'Global',
    direct: 'Direct',
    ruleDesc: 'Route traffic based on rules',
    globalDesc: 'Only follow the Global group',
    directDesc: 'Directly connect all traffic',
    'keep-alive-interval': 'keep-alive-interval',
    'find-process-mode': 'find-process-mode',
    'external-controller-tls': 'external-controller-tls',
    'external-ui-name': 'external-ui-name',
    'external-ui-url': 'external-ui-url',
    'unified-delay': 'unified-delay',
    'tcp-concurrent': 'tcp-concurrent',
    authentication: 'Http/Socks Auth',
    'skip-auth-prefixes': 'Skip Auth Prefixes',
    'store-selected': 'store-selected',
    'store-fake-ip': 'store-fake-ip',
    'geo-auto-update': 'GEO Auto Update',
    'geo-update-interval': 'GEO Update Interval',
    'lan-allowed-ips': 'LAN Allowed IPs',
    'lan-disallowed-ips': 'LAN Disallowed IPs',
    tun: {
      enable: 'Enable',
      stack: 'Stack',
      device: 'Device',
      'auto-route': 'Auto Route',
      'route-address': 'Route Address',
      'auto-detect-interface': 'Auto Detect Interface',
      'dns-hijack': 'DNS Hijack',
      'strict-route': 'Strict Route',
      mtu: 'MTU',
      'endpoint-independent-nat': 'Endpoint Independent NAT',
      system: 'System',
      gvisor: 'gVisor',
      mixed: 'Mixed',
      lwip: 'LWIP',
    },
    dns: {
      enable: 'Enable',
      listen: 'Listen',
      ipv6: 'IPv6',
      'use-hosts': 'Use Hosts',
      'use-system-hosts': 'Use System Hosts',
      'proxy-server-nameserver': 'Proxy Server Nameserver',
      'nameserver-policy': 'Nameserver Policy',
      fallback: 'Fallback',
      'fallback-filter': {
        name: 'Fallback Filter',
        geoip: 'GeoIP',
        'geoip-code': 'GeoIP Code',
        geosite: 'GeoSite',
        ipcidr: 'ipcidr',
        domain: 'domain',
      },
      'prefer-h3': 'Prefer h3',
      'enhanced-mode': 'Enhanced Mode',
      'fake-ip-range': 'Fake-IP Range',
      'fake-ip-filter-mode': {
        name: 'Fake-IP Filter Mode',
        blacklist: 'Blacklist',
        whitelist: 'Whitelist',
      },
      'fake-ip-filter': 'Fake-IP Filter',
      'default-nameserver': 'Default Nameserver',
      nameserver: 'NameServer',
      'fake-ip': 'Fake-IP',
      'redir-host': 'Redir-Host',
      hosts: 'Hosts',
    },
    tls: {
      certificate: 'certificate',
      'private-key': 'private-key',
    },
    'global-client-fingerprint': 'global-client-fingerprint',
    'geodata-mode': 'geodata-mode',
    'geodata-loader': 'geodata-loader',
    'geosite-matcher': {
      name: 'geosite-matcher',
      succinct: 'succinct',
      mph: 'mph',
    },
    'geox-url': {
      geoip: 'geoip',
      geosite: 'geosite',
      mmdb: 'mmdb',
      asn: 'asn',
    },
    'global-ua': 'global-ua',
    tracing: 'Tracing',
    'sniff-tls-sni': 'Sniff TLS SNI',
    'redirect-to-tun': 'eBPF Redirect to TUN',
    proxyGroups: {
      name: 'Name',
      lazy: 'Lazy',
      'disable-udp': 'Disable UDP',
      interval: 'Interval',
      tolerance: 'Tolerance',
      url: 'URL',
      filter: 'Filter',
      'exclude-filter': 'Exclude Filter',
      hidden: 'Hidden',
      icon: 'Icon',
      notFound: 'Some subscriptions or proxies are missing, please clean them up',
      needToAdd: 'References at least one proxy or subscription',
      sort: 'View and Sort',
      builtIn: 'Built-In',
      subscriptions: 'Subscriptions',
      type: {
        name: 'Type',
        select: 'select',
        'url-test': 'url-test',
        fallback: 'fallback',
        relay: 'relay',
        'load-balance': 'load-balance',
        Selector: 'Selector',
        UrlTest: 'UrlTest',
        Fallback: 'Fallback',
        Relay: 'Relay',
        LoadBalance: 'LoadBalance',
      },
      strategy: {
        name: 'Strategy',
        'consistent-hashing': 'consistent-hashing',
        'round-robin': 'round-robin',
      },
      empty: 'The subscription group is empty.',
      noSubs: 'The subscription list is empty.',
      'built-in': {
        select: '🚀 Select',
        auto: '🎈 Auto',
        direct: '🎯 Direct',
        reject: '🛑 Reject',
        fallback: '🐟 Fallback',
      },
    },
    rules: {
      payload: 'Payload',
      proxy: 'Proxy',
      'no-resolve': 'No Resolve',
      ruleset: 'RuleSet',
      rulesets: 'RuleSets',
      'rule-set-type': 'RuleSet Type',
      'ruleset-name': 'Name',
      'ruleset-proxy': 'Proxy',
      needGeodataMode: 'Please enable the "geodata-mode" option in the advanced settings',
      notFound: 'proxy group does not exist',
      empty: 'Ruleset list is empty',
      type: {
        name: 'Type',
        DOMAIN: 'DOMAIN',
        GEOIP: 'GEOIP',
        GEOSITE: 'GEOSITE',
        IPSET: 'IPSET',
        MATCH: 'MATCH',
        'DOMAIN-SUFFIX': 'DOMAIN-SUFFIX',
        'DOMAIN-KEYWORD': 'DOMAIN-KEYWORD',
        'DOMAIN-REGEX': 'DOMAIN-REGEX',
        'IP-CIDR': 'IP-CIDR',
        'IP-CIDR6': 'IP-CIDR6',
        'IP-ASN': 'IP-ASN',
        'SRC-PORT': 'SRC-PORT',
        'DST-PORT': 'DST-PORT',
        'PROCESS-NAME': 'PROCESS-NAME',
        'PROCESS-PATH': 'PROCESS-PATH',
        'RULE-SET': 'RULE-SET',
        LOGIC: 'LOGIC',
        'SRC-IP-CIDR': 'SRC-IP-CIDR',
      },
    },
    standard: 'Standard',
    memconservative: 'Memconservative',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    iOS: 'IOS',
    android: 'Android',
    edge: 'Edge',
    '360': '360',
    qq: 'QQ',
    random: 'Random',
    always: 'Always',
    strict: 'Strict',
    off: 'Off',
    notFound: 'Core Not Found',
    requestFailed: 'Request Failed',
    local: 'Local',
    remote: 'Remote',
    update: 'Update',
    restart: 'Restart Kernel',
  },
  router: {
    overview: 'Overview',
    subscriptions: 'Subscriptions',
    rulesets: 'Rulesets',
    plugins: 'Plugins',
    settings: 'Settings',
    debug: 'Debug',
    components: 'Components',
    about: 'About',
    profiles: 'Profiles',
    kernel: 'Kernel',
    scheduledtasks: 'Tasks',
  },
  home: {
    mode: 'Proxy Mode',
    global: 'Global',
    rule: 'Rule',
    direct: 'Direct',
    quickStart: 'Quick Start',
    noProfile: 'Welcome to the {0}, click the button to get started.',
    initSuccessful: 'Initialization successful',
    overview: {
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      refresh: 'Refresh',
      delayTest: 'Delay Test',
      stop: 'Stop Kernel',
      restart: 'Restart Kernel',
      viewlog: 'view log',
      start: 'Click to Start',
      noLogs: 'Log is empty',
      systemProxy: 'System Proxy',
      tunMode: 'TUN Mode',
      traffic: 'Traffic',
      realtimeTraffic: 'Real-time Traffic',
      totalTraffic: 'Total Traffic',
      connections: 'Connections',
      memory: 'Memory',
      transmit: 'Transmit',
      receive: 'Receive',
      settings: 'Kernel Settings',
      settingsTips:
        'Takes effect temporarily. For persistent changes, please modify the `profile` settings.',
      updateGEO: 'Update GEO',
      needPort: 'Please set the proxy port first',
    },
    controller: {
      name: 'Controller',
      autoClose: 'Auto-close',
      unAvailable: 'Show UnAvailable',
      cardMode: 'Card Mode',
      sortBy: 'Sort By Delay',
      delay: 'Delay test URL',
      delayUrl: 'Please enter the delayed test URL',
    },
    connections: {
      type: 'Type',
      process: 'Process',
      processPath: 'Process Path',
      sniffHost: 'Sniff Host',
      sourceIP: 'Source',
      remoteDestination: 'Destination',
      host: 'Host',
      inbound: 'Inbound',
      rule: 'Rule',
      chains: 'Chains',
      upload: 'Upload',
      download: 'Download',
      uploadSpeed: 'UL Speed',
      downSpeed: 'DL Speed',
      time: 'Time',
      close: 'Close',
      addToDirect: 'Add To DIRECT',
      addToProxy: 'Add To PROXY',
      addToReject: 'Add To REJECT',
      active: 'Active',
      closed: 'Closed',
      closeAll: 'Close all connections',
      sort: 'Sorting and Setting Visibility',
      details: 'Connection Details',
    },
  },
  subscribe: {
    name: 'Name',
    url: 'Remote Url',
    localPath: 'Local Path',
    website: 'Website',
    path: 'Save Path',
    include: 'Include Keywords',
    exclude: 'Exclude Keywords',
    includeProtocol: 'Include Protocol',
    excludeProtocol: 'Exclude Protocol',
    proxyPrefix: 'Proxy Prefix',
    updating: 'Updating',
    useragent: 'User-Agent',
    resetUserAgent: 'Reset User-Agent',
    useInternal: 'Use internal proxy-groups and rules',
    inSecure: 'Skip TLS Verification',
    healthCheck: {
      name: 'Health Check',
      interval: 'interval(s)',
      url: 'url',
    },
  },
  subscribes: {
    download: 'Download',
    upload: 'Upload',
    total: 'Total',
    expire: 'Expire',
    subtype: 'Subscription Type',
    website: 'Website',
    empty: 'The subscription list is empty. Please{action}a subscription first.',
    enterLink: 'Enter subscription link',
    proxyCount: 'Proxy Count',
    editProxies: 'Edit Proxies',
    editSourceFile: 'Edit Proxies(Source)',
    copySub: 'Copy Link',
    proxies: {
      type: 'Protocol',
      name: 'Name',
      add: 'Add Proxy',
    },
  },
  profile: {
    name: 'Name',
    generalSettings: 'General Settings',
    advancedSettings: 'Advanced Settings',
    step: {
      name: 'Name',
      general: 'General',
      tun: 'TUN',
      dns: 'DNS',
      groups: 'Proxy Groups',
      rules: 'Rules',
      'mixin-script': 'Mixin & Script',
    },
    proxies: 'Reference proxies',
    use: 'Reference subscriptions',
    noSubs: 'There are no available subscriptions.',
    group: 'Group Details',
    rule: 'Rule Details',
    auto: 'This profile is controlled by subscription and will be overwritten after updates.\nTo modify it, use mixins and scripts.',
    mixinSettings: {
      name: 'Mixin',
      priority: 'Priority',
      mixin: 'Mixin',
      gui: 'GUI',
    },
    scriptSettings: {
      name: 'Script',
    },
  },
  profiles: {
    shouldStop: 'Unable to delete, this profile is in use.',
    empty: 'The profiles list is empty, Please{action}a profile first.',
    copytoClipboard: 'Generate config to clipboard',
    generateAndView: 'Generate and View',
    copy: 'Copy and Paste',
    start: 'Start/Restart with this Profile',
    proxyGroups: 'Proxy Groups',
    rules: 'Rules',
  },
  ruleset: {
    manual: 'Manual',
    behavior: {
      name: 'Behavior',
      classical: 'classical',
      domain: 'domain',
      ipcidr: 'ipcidr',
    },
    rulesetType: 'Ruleset Type',
    format: {
      name: 'Format',
      yaml: 'Yaml',
      mrs: 'Mrs',
    },
    name: 'Name',
    url: 'Remote Url',
    path: 'Save Path',
    updating: 'Updating',
  },
  rulesets: {
    hub: 'Ruleset-Hub',
    total: 'Number of rule-sets',
    noDesc: 'No description',
    updating: 'Updating',
    fetching: 'fetching...',
    empty: 'The ruleset list is empty. Please{action}or import from the{import}first.',
    rulesetCount: 'Ruleset Count',
    editRuleset: 'Edit Rules',
    selectRuleType: 'Select Rule Type',
  },
  plugin: {
    trigger: 'Trigger',
    'on::manual': 'on::manual',
    'on::startup': 'on::startup',
    'on::shutdown': 'on::shutdown',
    'on::generate': 'on::generate',
    'on::subscribe': 'on::subscribe',
    'on::ready': 'on::ready',
    'on::task': 'on::task',
    'on::install': 'on::install',
    'on::uninstall': 'on::uninstall',
    'on::configure': 'on::configure',
    name: 'Name',
    description: 'Description',
    url: 'Remote Url',
    install: 'Installation required',
    installed: 'Installed',
    path: 'Save Path',
    type: 'Type',
    menus: 'Menus',
    context: 'Context',
    configuration: ' Configuration',
    menuKey: 'Menu Title',
    menuValue: 'Trigger function name',
    selectComponent: 'Select a component',
    confName: 'Name',
    confDescription: 'Description',
    confKey: 'Key',
    confDefault: 'Default',
    options: 'Options',
    restore: 'Reset to default',
  },
  plugins: {
    updating: 'Updating',
    empty: 'The plugin list is empty. Please{action}or import from the{import}first.',
    source: 'Source',
    reload: 'Reload',
    configuration: 'Configure',
    hub: 'Plugin-Hub',
    update: 'Update List',
    updateSuccess: 'updated successfully',
    total: 'Number of plug-ins',
    removeConfiguration: 'Do you want to remove the plugin configuration?',
    testRun: 'TestRun',
  },
  scheduledtask: {
    name: 'Name',
    type: 'Type',
    script: 'Script',
    subscriptions: 'Subscriptions',
    rulesets: 'Rulesets',
    plugins: 'Plugins',
    cron: 'Cron',
    notification: 'Task Completed Notification',
    cronTips: 'Seconds Minutes Hours "Day of month" Month "Day of week"',
    lastTime: 'Last Time',
    'update::subscription': 'update::subscription',
    'update::ruleset': 'update::ruleset',
    'update::plugin': 'update::plugin',
    'run::plugin': 'run::plugin',
    'run::script': 'run::script',
  },
  scheduledtasks: {
    logs: 'Logs',
    name: 'Plugin',
    duration: 'Duration',
    startTime: 'Start Time',
    endTime: 'End Time',
    time: 'Time',
    result: 'Result',
    empty: 'The scheduled task list is empty. Please{action}a scheduled task first.',
    run: 'Run now',
    log: 'View log',
  },
  settings: {
    general: 'General',
    theme: {
      name: 'Theme',
      light: 'Light Mode',
      dark: 'Dark Mode',
      auto: 'System',
    },
    color: {
      name: 'Color',
      default: 'Default',
      orange: 'Orange',
      pink: 'Pink',
      red: 'Red',
      skyblue: 'Skyblue',
      green: 'Green',
      purple: 'Purple',
    },
    fontFamily: 'Font-Family',
    resetFont: 'Reset Font-Family',
    appFolder: {
      name: 'App Folder',
      open: 'Open application folder',
    },
    lang: {
      name: 'Language',
      zh: '简体中文',
      en: 'English',
    },
    pages: {
      name: 'Page visibility',
    },
    windowState: {
      normal: 'Normal window',
      maximised: 'Maximised',
      minimised: 'Minimize window',
      fullscreen: 'Fullscreen',
    },
    needRestart: 'Restart Required',
    needAdmin: 'Admin required',
    exitOnClose: 'Exit APP On Window Close',
    closeKernelOnExit: 'Close Kernel When APP Exits',
    autoSetSystemProxy: 'Auto Set / Clear System Proxy',
    autoStartKernel: 'Auto Start Kernel',
    admin: 'Run As Admin',
    webviewGpuPolicy: {
      name: 'Webview Gpu Policy',
      always: 'Always',
      onDemand: 'OnDemand',
      never: 'Never',
    },
    addToMenu: 'Add Plugin To Menu',
    multipleInstance: 'Allow Multiple APP Instances',
    rollingRelease: 'Enable Rolling Release',
    startup: {
      name: 'Startup on boot',
      delay: 'Delay(s)',
    },
    kernel: {
      name: 'Mihomo',
      version: 'Switch version',
      stable: 'Stable version',
      alpha: 'Alpha version',
      grant: 'Grant Privileges',
      risk: 'This version is not auto-built by GitHub and may pose a security risk.',
      stillDownload: 'Still download',
    },
    userAgent: {
      name: 'User-Agent',
      reset: 'Reset User-Agent',
    },
    githubapi: {
      name: 'Authenticating to the REST API',
      tips: 'Provides a higher rate limit',
    },
  },
  about: {
    new: 'New',
    restart: 'Restart APP',
    noDownloadLink: 'No download link found',
    updateSuccessful: 'Update completed, please restart the App',
    updateSuccessfulReplace: 'Download completed, please manually replace the App',
    newVersion: 'New version found',
    latestVersion: 'Already the latest version',
  },
  titlebar: {
    resetSize: 'Reset Window',
    reload: 'Reload Window',
    restart: 'Restart App',
    exitApp: 'Exit App',
    waiting: 'Waiting for the program to exit...',
    timeout: 'Exit timed out. Force exit?\n\nReason: Plugin exit timed out.',
  },
  tray: {
    showMainWindow: 'Show Main Window',
    restart: 'Restart',
    restartTip: 'Restart App',
    exit: 'Exit',
    exitTip: 'Exit App',
    proxyGroup: 'Proxy Group',
    setSystemProxy: 'Set System Proxy',
    clearSystemProxy: 'Clear System Proxy',
    tun: 'Tun Mode',
    enableTunMode: 'Enable Tun Mode',
    disableTunMode: 'Disable Tun Mode',
    kernel: 'Kernel',
    proxy: 'System Proxy',
    startKernel: 'Start Kernel',
    stopKernel: 'Stop Kernel',
    restartKernel: 'Restart Kernel',
    plugins: 'Plugins',
  },
  commands: {
    noMatching: 'No matching commands',
  },
}
