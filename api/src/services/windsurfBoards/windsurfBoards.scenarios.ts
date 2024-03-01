import type { Prisma, WindsurfBoard } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WindsurfBoardCreateArgs>({
  windsurfBoard: {
    one: {
      data: {
        brand: 'String',
        fins: 4384165,
        type: 'String',
        model: 'String',
        volume: 436881,
      },
    },
    two: {
      data: {
        brand: 'String',
        fins: 2412424,
        type: 'String',
        model: 'String',
        volume: 8741267,
      },
    },
  },
})

export type StandardScenario = ScenarioData<WindsurfBoard, 'windsurfBoard'>
