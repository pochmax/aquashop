import type {
  CreateWindsurfSailMutation,
  CreateWindsurfSailInput,
  CreateWindsurfSailMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WindsurfSailForm from 'src/components/WindsurfSail/WindsurfSailForm'

const CREATE_WINDSURF_SAIL_MUTATION: TypedDocumentNode<
  CreateWindsurfSailMutation,
  CreateWindsurfSailMutationVariables
> = gql`
  mutation CreateWindsurfSailMutation($input: CreateWindsurfSailInput!) {
    createWindsurfSail(input: $input) {
      id
    }
  }
`

const NewWindsurfSail = () => {
  const [createWindsurfSail, { loading, error }] = useMutation(
    CREATE_WINDSURF_SAIL_MUTATION,
    {
      onCompleted: () => {
        toast.success('WindsurfSail created')
        navigate(routes.windsurfSails())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateWindsurfSailInput) => {
    createWindsurfSail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WindsurfSail</h2>
      </header>
      <div className="rw-segment-main">
        <WindsurfSailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWindsurfSail
