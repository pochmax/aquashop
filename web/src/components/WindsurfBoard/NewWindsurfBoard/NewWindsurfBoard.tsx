import type {
  CreateWindsurfBoardMutation,
  CreateWindsurfBoardInput,
  CreateWindsurfBoardMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WindsurfBoardForm from 'src/components/WindsurfBoard/WindsurfBoardForm'

const CREATE_WINDSURF_BOARD_MUTATION: TypedDocumentNode<
  CreateWindsurfBoardMutation,
  CreateWindsurfBoardMutationVariables
> = gql`
  mutation CreateWindsurfBoardMutation($input: CreateWindsurfBoardInput!) {
    createWindsurfBoard(input: $input) {
      id
    }
  }
`

const NewWindsurfBoard = () => {
  const [createWindsurfBoard, { loading, error }] = useMutation(
    CREATE_WINDSURF_BOARD_MUTATION,
    {
      onCompleted: () => {
        toast.success('WindsurfBoard created')
        navigate(routes.windsurfBoards())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateWindsurfBoardInput) => {
    createWindsurfBoard({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WindsurfBoard</h2>
      </header>
      <div className="rw-segment-main">
        <WindsurfBoardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWindsurfBoard
