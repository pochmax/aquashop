import EditWindsurfBoardCell from 'src/components/WindsurfBoard/EditWindsurfBoardCell'

type WindsurfBoardPageProps = {
  id: number
}

const EditWindsurfBoardPage = ({ id }: WindsurfBoardPageProps) => {
  return <EditWindsurfBoardCell id={id} />
}

export default EditWindsurfBoardPage
