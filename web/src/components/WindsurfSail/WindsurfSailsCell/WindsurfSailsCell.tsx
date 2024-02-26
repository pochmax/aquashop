import type {
  FindWindsurfSails,
  FindWindsurfSailsVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import WindsurfSails from 'src/components/WindsurfSail/WindsurfSails'

export const QUERY: TypedDocumentNode<
  FindWindsurfSails,
  FindWindsurfSailsVariables
> = gql`
  query FindWindsurfSails {
    windsurfSails {
      id
      brand
      size
      type
      model
      cumber
      mastSize
      wishSize
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No windsurfSails yet. '}
      <Link to={routes.newWindsurfSail()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindWindsurfSails>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  windsurfSails,
}: CellSuccessProps<FindWindsurfSails, FindWindsurfSailsVariables>) => {
  return <WindsurfSails windsurfSails={windsurfSails} />
}
