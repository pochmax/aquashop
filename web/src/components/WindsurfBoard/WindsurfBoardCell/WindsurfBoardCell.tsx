import type {
  FindWindsurfBoardById,
  FindWindsurfBoardByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import WindsurfBoard from 'src/components/WindsurfBoard/WindsurfBoard'

export const QUERY: TypedDocumentNode<
  FindWindsurfBoardById,
  FindWindsurfBoardByIdVariables
> = gql`
  query FindWindsurfBoardById($id: Int!) {
    windsurfBoard: windsurfBoard(id: $id) {
      id
      brand
      fins
      type
      model
      volume
      imageUrl
      sails
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WindsurfBoard not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWindsurfBoardByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  windsurfBoard,
}: CellSuccessProps<FindWindsurfBoardById, FindWindsurfBoardByIdVariables>) => {
  return <WindsurfBoard windsurfBoard={windsurfBoard} />
}
