export const schema = gql`
  type WindsurfBoard {
    id: Int!
    brand: String!
    fins: Int!
    type: String!
    model: String!
    volume: Int!
    imageUrl: String
    sails: String
  }

  type Query {
    windsurfBoards: [WindsurfBoard!]! @requireAuth
    windsurfBoard(id: Int!): WindsurfBoard @requireAuth
  }

  input CreateWindsurfBoardInput {
    brand: String!
    fins: Int!
    type: String!
    model: String!
    volume: Int!
    imageUrl: String
    sails: String
  }

  input UpdateWindsurfBoardInput {
    brand: String
    fins: Int
    type: String
    model: String
    volume: Int
    imageUrl: String
    sails: String
  }

  type Mutation {
    createWindsurfBoard(input: CreateWindsurfBoardInput!): WindsurfBoard!
      @requireAuth
    updateWindsurfBoard(
      id: Int!
      input: UpdateWindsurfBoardInput!
    ): WindsurfBoard! @requireAuth
    deleteWindsurfBoard(id: Int!): WindsurfBoard! @requireAuth
  }
`
