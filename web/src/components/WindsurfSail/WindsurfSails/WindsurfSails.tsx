import type {
  DeleteWindsurfSailMutation,
  DeleteWindsurfSailMutationVariables,
  FindWindsurfSails,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Item from 'src/components/Item/Item'
import { QUERY } from 'src/components/WindsurfSail/WindsurfSailsCell'

export const DELETE_WINDSURF_SAIL_MUTATION: TypedDocumentNode<
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
      {windsurfSails.map((windsurfSail) => (
        <Item key={windsurfSail.id} item={windsurfSail} />
      ))}
    </div>
  )
}

export default WindsurfSailsList
