import type {
  DeleteWindsurfSailMutation,
  DeleteWindsurfSailMutationVariables,
  FindWindsurfSailById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_WINDSURF_SAIL_MUTATION: TypedDocumentNode<
  DeleteWindsurfSailMutation,
  DeleteWindsurfSailMutationVariables
> = gql`
  mutation DeleteWindsurfSailMutation($id: Int!) {
    deleteWindsurfSail(id: $id) {
      id
    }
  }
`

interface Props {
  windsurfSail: NonNullable<FindWindsurfSailById['windsurfSail']>
}

const WindsurfSail = ({ windsurfSail }: Props) => {
  const [deleteWindsurfSail] = useMutation(DELETE_WINDSURF_SAIL_MUTATION, {
    onCompleted: () => {
      toast.success('WindsurfSail deleted')
      navigate(routes.windsurfSails())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteWindsurfSailMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete windsurfSail ' + id + '?')) {
      deleteWindsurfSail({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            WindsurfSail {windsurfSail.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{windsurfSail.id}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{windsurfSail.brand}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{windsurfSail.size}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{windsurfSail.type}</td>
            </tr>
            <tr>
              <th>Model</th>
              <td>{windsurfSail.model}</td>
            </tr>
            <tr>
              <th>Cumber</th>
              <td>{windsurfSail.cumber}</td>
            </tr>
            <tr>
              <th>Mast size</th>
              <td>{windsurfSail.mastSize}</td>
            </tr>
            <tr>
              <th>Wish size</th>
              <td>{windsurfSail.wishSize}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{windsurfSail.imageUrl}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{windsurfSail.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWindsurfSail({ id: windsurfSail.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(windsurfSail.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default WindsurfSail
