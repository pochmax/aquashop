import type {
  DeleteWindsurfBoardMutation,
  DeleteWindsurfBoardMutationVariables,
  FindWindsurfBoardById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_WINDSURF_BOARD_MUTATION: TypedDocumentNode<
  DeleteWindsurfBoardMutation,
  DeleteWindsurfBoardMutationVariables
> = gql`
  mutation DeleteWindsurfBoardMutation($id: Int!) {
    deleteWindsurfBoard(id: $id) {
      id
    }
  }
`

interface Props {
  windsurfBoard: NonNullable<FindWindsurfBoardById['windsurfBoard']>
}

const WindsurfBoard = ({ windsurfBoard }: Props) => {
  const [deleteWindsurfBoard] = useMutation(DELETE_WINDSURF_BOARD_MUTATION, {
    onCompleted: () => {
      toast.success('WindsurfBoard deleted')
      navigate(routes.windsurfBoards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteWindsurfBoardMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete windsurfBoard ' + id + '?')) {
      deleteWindsurfBoard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            WindsurfBoard {windsurfBoard.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{windsurfBoard.id}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{windsurfBoard.brand}</td>
            </tr>
            <tr>
              <th>Fins</th>
              <td>{windsurfBoard.fins}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{windsurfBoard.type}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{windsurfBoard.model}</td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>{windsurfBoard.volume}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{windsurfBoard.imageUrl}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{windsurfBoard.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWindsurfBoard({ id: windsurfBoard.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(windsurfBoard.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default WindsurfBoard
