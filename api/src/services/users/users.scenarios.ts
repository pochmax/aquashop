import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        pseudo: 'String407401',
        email: 'String5334360',
        phoneNumber: 'String3365266',
      },
    },
    two: {
      data: {
        pseudo: 'String1819077',
        email: 'String7577861',
        phoneNumber: 'String2803584',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
