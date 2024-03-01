import type { Prisma, WindsurfSail } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WindsurfSailCreateArgs>({
  windsurfSail: {
    one: {
      data: {
        brand: 'String',
        size: 7411978.017975867,
        type: 'String',
        model: 'String',
      },
    },
    two: {
      data: {
        brand: 'String',
        size: 7711587.641307629,
        type: 'String',
        model: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<WindsurfSail, 'windsurfSail'>
