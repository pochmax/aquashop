import WindsurfSailCell from 'src/components/WindsurfSail/WindsurfSailCell'

type WindsurfSailPageProps = {
  id: number
}

const WindsurfSailPage = ({ id }: WindsurfSailPageProps) => {
  return <WindsurfSailCell id={id} />
}

export default WindsurfSailPage
