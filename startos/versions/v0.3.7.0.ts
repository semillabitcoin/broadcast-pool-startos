import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_7_0 = VersionInfo.of({
  version: '0.3.7:0',
  releaseNotes: {
    en_US: 'Fix expired txs not moving to history. MTP compact format.',
    es_ES: 'Fix txs expiradas que no pasaban al historial. MTP en formato compacto.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
