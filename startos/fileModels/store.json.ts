import { sdk } from '../sdk'

export interface StoreData {
  appSeed: string
  appPassword: string
  electrumHost: string
  electrumPort: number
}

export const storeJson = sdk.FileHelper.json<StoreData>('store.json', 'main')
