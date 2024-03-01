import type { Prisma, UserCredential } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCredentialCreateArgs>({
  userCredential: {
    one: {
      data: {
        id: 'String',
        publicKey: Buffer.from([278, 294, 130]),
        counter: 7859805,
        user: {
          create: {
            email: 'String8899625',
            username: 'String1447070',
            role: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        id: 'String',
        publicKey: Buffer.from([295, 80, 285]),
        counter: 4384210,
        user: {
          create: {
            email: 'String8049466',
            username: 'String9434130',
            role: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserCredential, 'userCredential'>
