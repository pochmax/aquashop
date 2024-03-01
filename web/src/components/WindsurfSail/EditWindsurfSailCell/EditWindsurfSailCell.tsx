import type {
  EditWindsurfSailById,
  UpdateWindsurfSailInput,
  UpdateWindsurfSailMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WindsurfSailForm from 'src/components/WindsurfSail/WindsurfSailForm'

export const QUERY: TypedDocumentNode<EditWindsurfSailById> = gql`
  query EditWindsurfSailById($id: Int!) {
    windsurfSail: windsurfSail(id: $id) {
      id
      brand
      size
      type
      model
      cumber
      mastSize
      wishSize
      imageUrl
      sails
    }
  }
`

const UPDATE_WINDSURF_SAIL_MUTATION: TypedDocumentNode<
  EditWindsurfSailById,
  UpdateWindsurfSailMutationVariables
> = gql`
  mutation UpdateWindsurfSailMutation(
    $id: Int!
    $input: UpdateWindsurfSailInput!
  ) {
    updateWindsurfSail(id: $id, input: $input) {
      id
      brand
      size
      type
      model
      cumber
      mastSize
      wishSize
      imageUrl
      sails
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  windsurfSail,
}: CellSuccessProps<EditWindsurfSailById>) => {
  const [updateWindsurfSail, { loading, error }] = useMutation(
    UPDATE_WINDSURF_SAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('WindsurfSail updated')
        navigate(routes.windsurfSails())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateWindsurfSailInput,
    id: EditWindsurfSailById['windsurfSail']['id']
  ) => {
    updateWindsurfSail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WindsurfSail {windsurfSail?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WindsurfSailForm
          windsurfSail={windsurfSail}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
