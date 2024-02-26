export const schema = gql`
  type WindsurfSail {
    id: Int!
    brand: String!
    size: Float!
    type: String!
    model: String!
    cumber: Int
    mastSize: Float
    wishSize: Float
  }

  type Query {
    windsurfSails: [WindsurfSail!]! @requireAuth
    windsurfSail(id: Int!): WindsurfSail @requireAuth
  }

  input CreateWindsurfSailInput {
    brand: String!
    size: Float!
    type: String!
    model: String!
    cumber: Int
    mastSize: Float
    wishSize: Float
  }

  input UpdateWindsurfSailInput {
    brand: String
    size: Float
    type: String
    model: String
    cumber: Int
    mastSize: Float
    wishSize: Float
  }

  type Mutation {
    createWindsurfSail(input: CreateWindsurfSailInput!): WindsurfSail!
      @requireAuth
    updateWindsurfSail(
      id: Int!
      input: UpdateWindsurfSailInput!
    ): WindsurfSail! @requireAuth
    deleteWindsurfSail(id: Int!): WindsurfSail! @requireAuth
  }
`
