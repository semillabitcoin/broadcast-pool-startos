import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_12_0 = VersionInfo.of({
  version: '0.3.12:0',
  releaseNotes: {
    en_US: 'Status bar: distribute items evenly across width on desktop.',
    es_ES: 'Barra de estado: distribuir elementos uniformemente en escritorio.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
