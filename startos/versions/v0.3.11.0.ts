import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_11_0 = VersionInfo.of({
  version: '0.3.11:0',
  releaseNotes: {
    en_US: 'Faking blockheight PoC for Liana: lets wallets sign txs with future nLockTime for better privacy.',
    es_ES: 'PoC de falseado de altura de bloque para Liana: permite firmar txs con nLockTime futuro para mejor privacidad.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
