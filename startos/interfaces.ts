import { i18n } from './i18n'
import { sdk } from './sdk'
import { PROXY_PORT_INTERNAL, PROXY_PORT_EXTERNAL, WEB_PORT } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // HTTP — Web UI
  const uiMulti = sdk.MultiHost.of(effects, 'ui')
  const uiOrigin = await uiMulti.bindPort(WEB_PORT, { protocol: 'http' })
  const ui = sdk.createInterface(effects, {
    id: 'ui',
    name: i18n('Web UI'),
    description: i18n('Broadcast Pool web interface for managing scheduled transactions'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  const uiReceipt = await uiOrigin.export([ui])

  // TCP — Electrum proxy (plain internally, SSL externally via StartOS)
  // BP listens plain on 50004; StartOS exposes SSL on 50005
  // Wallets always connect to 50005 (same as Umbrel, but with SSL here)
  const proxyMulti = sdk.MultiHost.of(effects, 'electrum')
  const proxyOrigin = await proxyMulti.bindPort(PROXY_PORT_INTERNAL, {
    protocol: null,
    addSsl: {
      preferredExternalPort: PROXY_PORT_EXTERNAL,
      alpn: null,
      addXForwardedHeaders: false,
    },
    preferredExternalPort: PROXY_PORT_INTERNAL,
    secure: null,
  })
  const proxy = sdk.createInterface(effects, {
    id: 'electrum',
    name: i18n('Electrum Proxy'),
    description: i18n('Connect your wallet here (SSL port 50005). Transactions are retained until you schedule their broadcast.'),
    type: 'api',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  const proxyReceipt = await proxyOrigin.export([proxy])

  return [uiReceipt, proxyReceipt]
})
