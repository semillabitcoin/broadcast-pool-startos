import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

export const manifest = setupManifest({
  id: 'broadcast-pool',
  title: 'Broadcast Pool',
  license: 'MIT',
  wrapperRepo: 'https://github.com/semillabitcoin/broadcast-pool-startos',
  upstreamRepo: 'https://github.com/semillabitcoin/broadcast-pool',
  supportSite: 'https://github.com/semillabitcoin/broadcast-pool/issues',
  marketingSite: 'https://semillabitcoin.com',
  donationUrl: null,
  docsUrl: 'https://github.com/semillabitcoin/broadcast-pool',
  description: { short, long },
  volumes: ['main'],
  images: {
    'broadcast-pool': {
      source: {
        dockerTag: 'ghcr.io/semillabitcoin/broadcast-pool:latest',
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
  dependencies: {
    fulcrum: {
      description: 'Electrum server (Fulcrum) for connecting to the Bitcoin network',
      optional: true,
      metadata: {
        title: 'Fulcrum',
        icon: 'https://raw.githubusercontent.com/Start9Labs/fulcrum-startos/master/icon.svg',
      },
    },
    electrs: {
      description: 'Electrum server (Electrs) for connecting to the Bitcoin network',
      optional: true,
      metadata: {
        title: 'Electrs',
        icon: 'https://raw.githubusercontent.com/Start9Labs/electrs-wrapper/master/icon.svg',
      },
    },
  },
})
