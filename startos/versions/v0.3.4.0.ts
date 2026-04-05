import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_4_0 = VersionInfo.of({
  version: '0.3.4:0',
  releaseNotes: {
    en_US: 'Fix volume permissions (remove USER 1000 from Docker). Price-based broadcast, oracle discovery, tooltip fixes.',
    es_ES: 'Fix permisos de volumen (eliminar USER 1000 de Docker). Broadcast por precio, descubrimiento de oráculo, fixes de tooltips.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
