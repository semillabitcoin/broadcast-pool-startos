import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_13_0 = VersionInfo.of({
  version: '0.3.13:0',
  releaseNotes: {
    en_US: 'Fix vault duplicates: same tx was being stored N times due to broken dedup check on encrypted payload.',
    es_ES: 'Fix duplicados en bóveda: la misma tx se almacenaba N veces por check roto sobre payload cifrado.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
