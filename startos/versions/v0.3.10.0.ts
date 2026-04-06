import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_10_0 = VersionInfo.of({
  version: '0.3.10:0',
  releaseNotes: {
    en_US: 'Security: fail-closed expiry check, broadcasting watchdog (60min), broadcast exception handling.',
    es_ES: 'Seguridad: verificación expiración fail-closed, watchdog broadcasting (60min), manejo de excepciones de broadcast.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
