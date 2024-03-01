import type { WindsurfSail } from '@prisma/client'

import {
  windsurfSails,
  windsurfSail,
  createWindsurfSail,
  updateWindsurfSail,
  deleteWindsurfSail,
} from './windsurfSails'
import type { StandardScenario } from './windsurfSails.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('windsurfSails', () => {
  scenario('returns all windsurfSails', async (scenario: StandardScenario) => {
    const result = await windsurfSails()

    expect(result.length).toEqual(Object.keys(scenario.windsurfSail).length)
  })

  scenario(
    'returns a single windsurfSail',
    async (scenario: StandardScenario) => {
      const result = await windsurfSail({ id: scenario.windsurfSail.one.id })

      expect(result).toEqual(scenario.windsurfSail.one)
    }
  )

  scenario('creates a windsurfSail', async () => {
    const result = await createWindsurfSail({
      input: {
        brand: 'String',
        size: 3948479.9975508666,
        type: 'String',
        model: 'String',
      },
    })

    expect(result.brand).toEqual('String')
    expect(result.size).toEqual(3948479.9975508666)
    expect(result.type).toEqual('String')
    expect(result.model).toEqual('String')
  })

  scenario('updates a windsurfSail', async (scenario: StandardScenario) => {
    const original = (await windsurfSail({
      id: scenario.windsurfSail.one.id,
    })) as WindsurfSail
    const result = await updateWindsurfSail({
      id: original.id,
      input: { brand: 'String2' },
    })

    expect(result.brand).toEqual('String2')
  })

  scenario('deletes a windsurfSail', async (scenario: StandardScenario) => {
    const original = (await deleteWindsurfSail({
      id: scenario.windsurfSail.one.id,
    })) as WindsurfSail
    const result = await windsurfSail({ id: original.id })

    expect(result).toEqual(null)
  })
})
