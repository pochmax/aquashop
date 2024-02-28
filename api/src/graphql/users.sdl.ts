export const schema = gql`
  type User {
    id: Int!
    pseudo: String!
    email: String!
    phoneNumber: String!
    avatarUrl: String
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    pseudo: String!
    email: String!
    phoneNumber: String!
    avatarUrl: String
  }

  input UpdateUserInput {
    pseudo: String
    email: String
    phoneNumber: String
    avatarUrl: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
