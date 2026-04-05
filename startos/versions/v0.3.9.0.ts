import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_9_0 = VersionInfo.of({
  version: '0.3.9:0',
  releaseNotes: {
    en_US: 'Block broadcast of expired txs. Hide action buttons for expired price-scheduled transactions.',
    es_ES: 'Bloquear broadcast de txs expiradas. Ocultar botones de acción para transacciones expiradas por precio.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
