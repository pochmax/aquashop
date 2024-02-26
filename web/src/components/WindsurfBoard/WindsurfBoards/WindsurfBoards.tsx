import type {
  DeleteWindsurfBoardMutation,
  DeleteWindsurfBoardMutationVariables,
  FindWindsurfBoards,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Item from 'src/components/Item/Item'
import { QUERY } from 'src/components/WindsurfBoard/WindsurfBoardsCell'

export const DELETE_WINDSURF_BOARD_MUTATION: TypedDocumentNode<
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
    <div className="list">
      {windsurfBoards.map((windsurfBoard) => (
        <Item key={windsurfBoard.id} item={windsurfBoard} />
      ))}
    </div>
  )
}

export default WindsurfBoardsList
