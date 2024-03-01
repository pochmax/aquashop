import type {
  FindWindsurfBoards,
  FindWindsurfBoardsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import WindsurfBoards from 'src/components/WindsurfBoard/WindsurfBoards'

export const QUERY: TypedDocumentNode<
  FindWindsurfBoards,
  FindWindsurfBoardsVariables
> = gql`
  query FindWindsurfBoards {
    windsurfBoards {
      id
      brand
      fins
      type
      model
      volume
      imageUrl
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No windsurfBoards yet. '}
      <Link to={routes.newWindsurfBoard()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindWindsurfBoards>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  windsurfBoards,
}: CellSuccessProps<FindWindsurfBoards, FindWindsurfBoardsVariables>) => {
  return <WindsurfBoards windsurfBoards={windsurfBoards} />
}
