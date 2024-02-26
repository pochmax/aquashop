import type { Prisma, WindsurfSail } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WindsurfSailCreateArgs>({
  windsurfSail: {
    one: {
      data: {
        brand: 'String',
        size: 7247596.534592216,
        type: 'String',
        model: 'String',
      },
    },
    two: {
      data: {
        brand: 'String',
        size: 8196109.333332671,
        type: 'String',
        model: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<WindsurfSail, 'windsurfSail'>
