import type {
  FindWindsurfSailById,
  FindWindsurfSailByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import WindsurfSail from 'src/components/WindsurfSail/WindsurfSail'

export const QUERY: TypedDocumentNode<
  FindWindsurfSailById,
  FindWindsurfSailByIdVariables
> = gql`
  query FindWindsurfSailById($id: Int!) {
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
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WindsurfSail not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindWindsurfSailByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  windsurfSail,
}: CellSuccessProps<FindWindsurfSailById, FindWindsurfSailByIdVariables>) => {
  return <WindsurfSail windsurfSail={windsurfSail} />
}
