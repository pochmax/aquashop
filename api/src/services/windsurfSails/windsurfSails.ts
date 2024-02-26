import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const windsurfSails: QueryResolvers['windsurfSails'] = () => {
  return db.windsurfSail.findMany()
}

export const windsurfSail: QueryResolvers['windsurfSail'] = ({ id }) => {
  return db.windsurfSail.findUnique({
    where: { id },
  })
}

export const createWindsurfSail: MutationResolvers['createWindsurfSail'] = ({
  input,
}) => {
  return db.windsurfSail.create({
    data: input,
  })
}

export const updateWindsurfSail: MutationResolvers['updateWindsurfSail'] = ({
  id,
  input,
}) => {
  return db.windsurfSail.update({
    data: input,
    where: { id },
  })
}

export const deleteWindsurfSail: MutationResolvers['deleteWindsurfSail'] = ({
  id,
}) => {
  return db.windsurfSail.delete({
    where: { id },
  })
}
