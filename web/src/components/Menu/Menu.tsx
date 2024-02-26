import { Link, routes } from '@redwoodjs/router'
import './Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="title">
        <Link to={routes.home()}>AquaShop</Link>
      </h1>
      <div className="links">
        <Link to={routes.windsurfBoards()}>WindSurf Board</Link>
        <Link to={routes.windsurfSails()}>WindSurf Board</Link>
      </div>
    </div>
  )
}

export default Menu
