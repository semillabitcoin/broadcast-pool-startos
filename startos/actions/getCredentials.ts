import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'

export const getCredentials = sdk.Action.withoutInput(
  'get-credentials',
  async ({ effects }) => {
    const store = await storeJson.read((s) => s).const(effects)
    const password = store?.appPassword ?? 'not set'

    return {
      version: '1',
      title: i18n('Credentials'),
      message: i18n(`Your Broadcast Pool password is: ${password}`),
      result: null,
    }
  },
  {
    name: i18n('View Credentials'),
    description: i18n('Show the auto-generated password for Broadcast Pool'),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },
)
