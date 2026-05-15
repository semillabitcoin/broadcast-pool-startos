import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_3_14_0 = VersionInfo.of({
  version: '0.3.14:0',
  releaseNotes: {
    en_US: 'Major release: nLockTime categorization (future/present-past/zero), warning + double-confirm UI for txs that leak anti-fee-sniping fingerprint. Event-driven Liana virtual height (replaces time-based loop, advances per signed tx). Pool export/import (.bp) with NIP-44, passphrase, or unencrypted. Auto CPFP rescan on every tx arrival. New "How it works" tab. Settings refresh + responsive table. Metadata hygiene cleanup.',
    es_ES: 'Release mayor: categorización del nLockTime (futuro/presente-pasado/cero), advertencia y doble confirmación para tx que dejan huella anti-fee-sniping. Altura virtual de Liana event-driven (reemplaza el loop temporal, avanza por tx firmada). Export/import del pool (.bp) con NIP-44, passphrase o sin cifrar. Auto rescan CPFP al llegar cada tx. Nueva pestaña "Cómo funciona". Refresh de Ajustes + tabla responsive. Limpieza de metadata.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
