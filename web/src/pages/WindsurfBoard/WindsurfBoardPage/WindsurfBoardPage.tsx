import WindsurfBoardCell from 'src/components/WindsurfBoard/WindsurfBoardCell'

type WindsurfBoardPageProps = {
  id: number
}

const WindsurfBoardPage = ({ id }: WindsurfBoardPageProps) => {
  return <WindsurfBoardCell id={id} />
}

export default WindsurfBoardPage
