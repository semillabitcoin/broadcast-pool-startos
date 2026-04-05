import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_8_0 = VersionInfo.of({
  version: '0.3.8:0',
  releaseNotes: {
    en_US: 'Fix price schedule button not working (missing datetime import).',
    es_ES: 'Fix botón de programar por precio que no funcionaba (import datetime faltante).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
