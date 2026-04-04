import { utils } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { storeJson, StoreData } from '../fileModels/store.json'

export const initializeService = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  // Generate secrets on first install
  const appSeed = utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })
  const appPassword = utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 22 })

  const store: StoreData = {
    appSeed,
    appPassword,
    electrumHost: 'fulcrum.startos',
    electrumPort: 50001,
  }

  await storeJson.write(effects, store)
})
