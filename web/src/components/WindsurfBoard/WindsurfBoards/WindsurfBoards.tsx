import type {
  DeleteWindsurfBoardMutation,
  DeleteWindsurfBoardMutationVariables,
  FindWindsurfBoards,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/WindsurfBoard/WindsurfBoardsCell'
import { truncate } from 'src/lib/formatters'

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

const WindsurfBoardsList = ({ windsurfBoards }: FindWindsurfBoards) => {
  const [deleteWindsurfBoard] = useMutation(DELETE_WINDSURF_BOARD_MUTATION, {
    onCompleted: () => {
      toast.success('WindsurfBoard deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteWindsurfBoardMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete windsurfBoard ' + id + '?')) {
      deleteWindsurfBoard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Fins</th>
            <th>Type</th>
            <th>Model</th>
            <th>Volume</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {windsurfBoards.map((windsurfBoard) => (
            <tr key={windsurfBoard.id}>
              <td>{truncate(windsurfBoard.id)}</td>
              <td>{truncate(windsurfBoard.brand)}</td>
              <td>{truncate(windsurfBoard.fins)}</td>
              <td>{truncate(windsurfBoard.type)}</td>
              <td>{truncate(windsurfBoard.model)}</td>
              <td>{truncate(windsurfBoard.volume)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.windsurfBoard({ id: windsurfBoard.id })}
                    title={'Show windsurfBoard ' + windsurfBoard.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWindsurfBoard({ id: windsurfBoard.id })}
                    title={'Edit windsurfBoard ' + windsurfBoard.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete windsurfBoard ' + windsurfBoard.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(windsurfBoard.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WindsurfBoardsList
