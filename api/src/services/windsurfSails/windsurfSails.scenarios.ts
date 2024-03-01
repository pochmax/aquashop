import type { Prisma, WindsurfSail } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WindsurfSailCreateArgs>({
  windsurfSail: {
    one: {
      data: {
        brand: 'String',
        size: 4403450.68806331,
        type: 'String',
        model: 'String',
        user: {
          create: {
            email: 'String4839643',
            username: 'String4468260',
            role: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        brand: 'String',
        size: 5793084.697200646,
        type: 'String',
        model: 'String',
        user: {
          create: {
            email: 'String9261434',
            username: 'String9926151',
            role: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WindsurfSail, 'windsurfSail'>
