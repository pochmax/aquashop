import type {
  QueryResolvers,
  MutationResolvers,
  WindsurfBoardRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const windsurfBoards: QueryResolvers['windsurfBoards'] = () => {
  return db.windsurfBoard.findMany()
}

export const windsurfBoard: QueryResolvers['windsurfBoard'] = ({ id }) => {
  return db.windsurfBoard.findUnique({
    where: { id },
  })
}

export const createWindsurfBoard: MutationResolvers['createWindsurfBoard'] = ({
  input,
}) => {
  return db.windsurfBoard.create({
    data: input,
  })
}

export const updateWindsurfBoard: MutationResolvers['updateWindsurfBoard'] = ({
  id,
  input,
}) => {
  return db.windsurfBoard.update({
    data: input,
    where: { id },
  })
}

export const deleteWindsurfBoard: MutationResolvers['deleteWindsurfBoard'] = ({
  id,
}) => {
  return db.windsurfBoard.delete({
    where: { id },
  })
}

export const WindsurfBoard: WindsurfBoardRelationResolvers = {
  user: (_obj, { root }) => {
    return db.windsurfBoard.findUnique({ where: { id: root?.id } }).user()
  },
}
