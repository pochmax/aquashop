import type {
  DeleteWindsurfSailMutation,
  DeleteWindsurfSailMutationVariables,
  FindWindsurfSails,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/WindsurfSail/WindsurfSailsCell'
import { truncate } from 'src/lib/formatters'

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

const WindsurfSailsList = ({ windsurfSails }: FindWindsurfSails) => {
  const [deleteWindsurfSail] = useMutation(DELETE_WINDSURF_SAIL_MUTATION, {
    onCompleted: () => {
      toast.success('WindsurfSail deleted')
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

  const onDeleteClick = (id: DeleteWindsurfSailMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete windsurfSail ' + id + '?')) {
      deleteWindsurfSail({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Size</th>
            <th>Type</th>
            <th>Model</th>
            <th>Cumber</th>
            <th>Mast size</th>
            <th>Wish size</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {windsurfSails.map((windsurfSail) => (
            <tr key={windsurfSail.id}>
              <td>{truncate(windsurfSail.id)}</td>
              <td>{truncate(windsurfSail.brand)}</td>
              <td>{truncate(windsurfSail.size)}</td>
              <td>{truncate(windsurfSail.type)}</td>
              <td>{truncate(windsurfSail.model)}</td>
              <td>{truncate(windsurfSail.cumber)}</td>
              <td>{truncate(windsurfSail.mastSize)}</td>
              <td>{truncate(windsurfSail.wishSize)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.windsurfSail({ id: windsurfSail.id })}
                    title={'Show windsurfSail ' + windsurfSail.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWindsurfSail({ id: windsurfSail.id })}
                    title={'Edit windsurfSail ' + windsurfSail.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete windsurfSail ' + windsurfSail.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(windsurfSail.id)}
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

export default WindsurfSailsList
