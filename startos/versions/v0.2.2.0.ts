import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_2_2_0 = VersionInfo.of({
  version: '0.2.2:0',
  releaseNotes: {
    en_US: 'Initial Start9 release. Settings tab redesign, wallet connection info, Start9 SSL support.',
    es_ES: 'Primera versión para Start9. Rediseño de ajustes, info de conexión de wallet, soporte SSL Start9.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
