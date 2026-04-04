import { sdk } from './sdk'

export const setBackups = sdk.setupBackups(async ({ effects }) => {
  return sdk.Backups.volumes('main').build()
})
