import { VersionInfo } from '@start9labs/start-sdk'

export const v0_2_2_0 = VersionInfo.of({
  version: '0.2.2.0:0',
  releaseNotes: `v0.2.2 — Settings tab redesign, wallet connection info, Start9 support.

- Redesigned Settings tab: auto-discovered servers as clickable cards, collapsible manual connection, inline preference saves
- New "How to connect your wallet" section with copyable address
- Independent npub save (no global Save button)
- Electrum proxy port exposed via API for dynamic connection info
- i18n improvements (ES/EN)`,
  migrations: {
    up: async ({ effects }) => {
      // No migration needed for first Start9 release
    },
    down: async ({ effects }) => {
      // Cannot downgrade from first Start9 release
      throw new Error('Cannot downgrade: this is the first Start9 release')
    },
  },
})
