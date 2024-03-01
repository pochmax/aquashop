import type { Prisma, WindsurfBoard } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WindsurfBoardCreateArgs>({
  windsurfBoard: {
    one: {
      data: {
        brand: 'String',
        fins: 4063735,
        type: 'String',
        model: 'String',
        volume: 8313238,
        user: {
          create: {
            email: 'String1233003',
            username: 'String9661359',
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
        fins: 6872895,
        type: 'String',
        model: 'String',
        volume: 6776749,
        user: {
          create: {
            email: 'String2525222',
            username: 'String2861596',
            role: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WindsurfBoard, 'windsurfBoard'>
