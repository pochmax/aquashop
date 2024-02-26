import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { DELETE_WINDSURF_BOARD_MUTATION } from '../WindsurfBoard/WindsurfBoards'
import { DELETE_WINDSURF_SAIL_MUTATION } from '../WindsurfSail/WindsurfSails'
const generateItemRoutes = (item) => {
  let showRoute, editRoute

  // Générer les routes en fonction du type d'item
  if (item.__typename === 'WindsurfBoard') {
    showRoute = routes.windsurfBoard({ id: item.id })
    editRoute = routes.editWindsurfBoard({ id: item.id })
  } else if (item.__typename === 'WindsurfSail') {
    showRoute = routes.windsurfSail({ id: item.id })
    editRoute = routes.editWindsurfSail({ id: item.id })
  }

  return { showRoute, editRoute }
}

const Item = ({ item }) => {
  const { showRoute, editRoute } = generateItemRoutes(item)

  const [deleteWindsurfBoard] = useMutation(DELETE_WINDSURF_BOARD_MUTATION)
  const [deleteWindsurfSail] = useMutation(DELETE_WINDSURF_SAIL_MUTATION)

  const onDeleteClick = (id, typeName) => {
    if (confirm(`Are you sure you want to delete ${typeName} ${id}?`)) {
      if (typeName === 'WindsurfBoard') {
        deleteWindsurfBoard({ variables: { id } })
      } else if (typeName === 'WindsurfSail') {
        deleteWindsurfSail({ variables: { id } })
      }
    }
  }

  return (
    <div className="card">
      {Object.keys(item).map((key) => {
        if (key === 'brand') {
          return (
            <h1 key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)} : {item[key]}
            </h1>
          )
        }
        if (key !== 'id' && key !== '__typename' && key !== 'brand') {
          return (
            <p key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)} : {item[key]}
            </p>
          )
        }
      })}
      <nav className="actions">
        <Link
          to={showRoute}
          title={'Show  ' + item.brand + ' detail'}
          className="button"
        >
          Show
        </Link>
        <Link
          to={editRoute}
          title={`Edit ${item.__typename}` + item.id}
          className="button"
        >
          Edit
        </Link>
        <button
          type="button"
          title={`Delete ${item.__typename}` + item.id}
          className="button"
          onClick={() => onDeleteClick(item.id, item.__typename)}
        >
          Delete
        </button>
      </nav>
    </div>
  )
}

export default Item
