import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

export const manifest = setupManifest({
  id: 'broadcast-pool',
  title: 'Broadcast Pool',
  license: 'MIT',
  packageRepo: 'https://github.com/semillabitcoin/broadcast-pool-startos',
  upstreamRepo: 'https://github.com/semillabitcoin/broadcast-pool',
  marketingUrl: 'https://semillabitcoin.com',
  donationUrl: null,
  docsUrls: ['https://github.com/semillabitcoin/broadcast-pool'],
  description: { short, long },
  volumes: ['main'],
  images: {
    'broadcast-pool': {
      source: {
        dockerTag: 'ghcr.io/semillabitcoin/broadcast-pool:v0.3.10',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: 'Broadcast Pool acts as an Electrum proxy. Configure your wallet to connect to this server on port 50005 (SSL).',
    update: null,
    uninstall: 'Any retained (unbroadcast) transactions will be lost. Make sure to broadcast or export them first.',
    restore: null,
    start: null,
    stop: 'Stopping Broadcast Pool will disconnect all wallets. Retained transactions are preserved in the database.',
  },
  dependencies: {},
})
