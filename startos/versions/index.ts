import { VersionGraph } from '@start9labs/start-sdk'
import { v_0_3_8_0 } from './v0.3.8.0'
import { v_0_3_7_0 } from './v0.3.7.0'
import { v_0_3_6_0 } from './v0.3.6.0'
import { v_0_3_5_0 } from './v0.3.5.0'
import { v_0_3_4_0 } from './v0.3.4.0'
import { v_0_2_2_0 } from './v0.2.2.0'

export const versionGraph = VersionGraph.of({
  current: v_0_3_8_0,
  other: [v_0_3_7_0, v_0_3_6_0, v_0_3_5_0, v_0_3_4_0, v_0_2_2_0],
})
