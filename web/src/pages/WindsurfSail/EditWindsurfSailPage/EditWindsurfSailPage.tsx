import EditWindsurfSailCell from 'src/components/WindsurfSail/EditWindsurfSailCell'

type WindsurfSailPageProps = {
  id: number
}

const EditWindsurfSailPage = ({ id }: WindsurfSailPageProps) => {
  return <EditWindsurfSailCell id={id} />
}

export default EditWindsurfSailPage
