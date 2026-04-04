import { i18n } from './i18n'
import { sdk } from './sdk'
import { PROXY_PORT_INTERNAL, WEB_PORT } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Broadcast Pool'))

  return sdk.Daemons.of(effects)
    .addDaemon('primary', {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'broadcast-pool' },
        sdk.Mounts.of().mountVolume({
          volumeId: 'main',
          subpath: null,
          mountpoint: '/data',
          readonly: false,
        }),
        'broadcast-pool-sub',
      ),
      exec: {
        command: ['python3', '-m', 'src.main'],
        env: {
          // Default upstream: Fulcrum on StartOS (user can change from BP web UI)
          ELECTRUM_HOST: 'fulcrum.startos',
          ELECTRUM_PORT: '50001',
          DB_PATH: '/data/pool.db',
          WEB_PORT: String(WEB_PORT),
          WEB_BIND: '0.0.0.0',
          PROXY_PORT: String(PROXY_PORT_INTERNAL),
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
})
