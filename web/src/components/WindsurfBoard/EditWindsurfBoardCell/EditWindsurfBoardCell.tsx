import type {
  EditWindsurfBoardById,
  UpdateWindsurfBoardInput,
  UpdateWindsurfBoardMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WindsurfBoardForm from 'src/components/WindsurfBoard/WindsurfBoardForm'

export const QUERY: TypedDocumentNode<EditWindsurfBoardById> = gql`
  query EditWindsurfBoardById($id: Int!) {
    windsurfBoard: windsurfBoard(id: $id) {
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

const UPDATE_WINDSURF_BOARD_MUTATION: TypedDocumentNode<
  EditWindsurfBoardById,
  UpdateWindsurfBoardMutationVariables
> = gql`
  mutation UpdateWindsurfBoardMutation(
    $id: Int!
    $input: UpdateWindsurfBoardInput!
  ) {
    updateWindsurfBoard(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  windsurfBoard,
}: CellSuccessProps<EditWindsurfBoardById>) => {
  const [updateWindsurfBoard, { loading, error }] = useMutation(
    UPDATE_WINDSURF_BOARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('WindsurfBoard updated')
        navigate(routes.windsurfBoards())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateWindsurfBoardInput,
    id: EditWindsurfBoardById['windsurfBoard']['id']
  ) => {
    updateWindsurfBoard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WindsurfBoard {windsurfBoard?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WindsurfBoardForm
          windsurfBoard={windsurfBoard}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
