import { i18n } from './i18n'
import { sdk } from './sdk'
import { storeJson } from './fileModels/store.json'
import { PROXY_PORT_INTERNAL, WEB_PORT } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Broadcast Pool'))

  const store = await storeJson.read((s) => s).const(effects)

  const electrumHost = store?.electrumHost ?? 'fulcrum.startos'
  const electrumPort = store?.electrumPort ?? 50001
  const appSeed = store?.appSeed ?? ''
  const appPassword = store?.appPassword ?? ''

  const appSub = await sdk.SubContainer.of(
    effects,
    { imageId: 'broadcast-pool' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/data',
      readonly: false,
    }),
    'broadcast-pool-sub',
  )

  return sdk.Daemons.of(effects)
    .addDaemon('primary', {
      subcontainer: appSub,
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          ELECTRUM_HOST: electrumHost,
          ELECTRUM_PORT: String(electrumPort),
          DB_PATH: '/data/pool.db',
          WEB_PORT: String(WEB_PORT),
          WEB_BIND: '0.0.0.0',
          PROXY_PORT: String(PROXY_PORT_INTERNAL),
          APP_SEED: appSeed,
          APP_PASSWORD: appPassword,
        },
      },
      ready: {
        display: i18n('Web Interface'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, WEB_PORT, {
            successMessage: i18n('Broadcast Pool is ready'),
            errorMessage: i18n('Broadcast Pool is not yet ready'),
          }),
      },
      requires: [],
    })
    .addHealthCheck('proxy', {
      ready: {
        display: i18n('Electrum Proxy'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, PROXY_PORT_INTERNAL, {
            successMessage: i18n('Electrum proxy is listening'),
            errorMessage: i18n('Electrum proxy is not ready'),
          }),
      },
      requires: ['primary'],
    })
})
