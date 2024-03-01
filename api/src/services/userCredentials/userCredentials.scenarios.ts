import type { Prisma, UserCredential } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCredentialCreateArgs>({
  userCredential: {
    one: {
      data: {
        id: 'String',
        publicKey: Buffer.from([286, 63, 195]),
        counter: 5610225,
        user: {
          create: {
            email: 'String8303115',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        id: 'String',
        publicKey: Buffer.from([235, 281, 48]),
        counter: 4668535,
        user: {
          create: {
            email: 'String4881805',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserCredential, 'userCredential'>
