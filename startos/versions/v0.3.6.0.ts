import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_6_0 = VersionInfo.of({
  version: '0.3.6:0',
  releaseNotes: {
    en_US: 'Expired status for price-scheduled txs. Txs move to history when expiry passes, stored in vault if configured.',
    es_ES: 'Estado expirada para txs programadas por precio. Las txs pasan al historial al expirar, se almacenan en bóveda si está configurada.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
