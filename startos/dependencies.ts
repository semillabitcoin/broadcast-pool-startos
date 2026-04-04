import { sdk } from './sdk'
import { storeJson } from './fileModels/store.json'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  const store = await storeJson.read((s) => s).const(effects)
  const electrumHost = store?.electrumHost ?? 'fulcrum.startos'

  if (electrumHost === 'fulcrum.startos') {
    return {
      fulcrum: {
        kind: 'running' as const,
        versionRange: '>=2.1.0',
        healthChecks: [],
      },
    }
  }

  if (electrumHost === 'electrs.startos') {
    return {
      electrs: {
        kind: 'running' as const,
        versionRange: '>=0.11.1',
        healthChecks: [],
      },
    }
  }

  // External Electrum server configured — no local dependencies
  return {}
})
