import type { Prisma, WindsurfBoard } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WindsurfBoardCreateArgs>({
  windsurfBoard: {
    one: {
      data: {
        brand: 'String',
        fins: 7280684,
        type: 'String',
        model: 'String',
        volume: 9203720,
      },
    },
    two: {
      data: {
        brand: 'String',
        fins: 3064544,
        type: 'String',
        model: 'String',
        volume: 7715420,
      },
    },
  },
})

export type StandardScenario = ScenarioData<WindsurfBoard, 'windsurfBoard'>
