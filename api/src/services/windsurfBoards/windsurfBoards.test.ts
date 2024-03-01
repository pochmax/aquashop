import type { WindsurfBoard } from '@prisma/client'

import {
  windsurfBoards,
  windsurfBoard,
  createWindsurfBoard,
  updateWindsurfBoard,
  deleteWindsurfBoard,
} from './windsurfBoards'
import type { StandardScenario } from './windsurfBoards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('windsurfBoards', () => {
  scenario('returns all windsurfBoards', async (scenario: StandardScenario) => {
    const result = await windsurfBoards()

    expect(result.length).toEqual(Object.keys(scenario.windsurfBoard).length)
  })

  scenario(
    'returns a single windsurfBoard',
    async (scenario: StandardScenario) => {
      const result = await windsurfBoard({ id: scenario.windsurfBoard.one.id })

      expect(result).toEqual(scenario.windsurfBoard.one)
    }
  )

  scenario('creates a windsurfBoard', async () => {
    const result = await createWindsurfBoard({
      input: {
        brand: 'String',
        fins: 1328713,
        type: 'String',
        model: 'String',
        volume: 1475667,
      },
    })

    expect(result.brand).toEqual('String')
    expect(result.fins).toEqual(1328713)
    expect(result.type).toEqual('String')
    expect(result.model).toEqual('String')
    expect(result.volume).toEqual(1475667)
  })

  scenario('updates a windsurfBoard', async (scenario: StandardScenario) => {
    const original = (await windsurfBoard({
      id: scenario.windsurfBoard.one.id,
    })) as WindsurfBoard
    const result = await updateWindsurfBoard({
      id: original.id,
      input: { brand: 'String2' },
    })

    expect(result.brand).toEqual('String2')
  })

  scenario('deletes a windsurfBoard', async (scenario: StandardScenario) => {
    const original = (await deleteWindsurfBoard({
      id: scenario.windsurfBoard.one.id,
    })) as WindsurfBoard
    const result = await windsurfBoard({ id: original.id })

    expect(result).toEqual(null)
  })
})
