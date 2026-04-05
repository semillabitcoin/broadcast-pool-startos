import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_5_0 = VersionInfo.of({
  version: '0.3.5:0',
  releaseNotes: {
    en_US: 'Security hardening, price oracle discovery, connected labels, dependency pinning.',
    es_ES: 'Seguridad reforzada, descubrimiento de oráculo de precio, labels de conexión, dependencias pineadas.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
