import { Link, routes } from '@redwoodjs/router'
import './Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="title">
        <Link to={routes.homePage()}>AquaShop</Link>
      </h1>
      <div className="links">
        <Link to={routes.windsurfBoards()}>WindSurf Boards</Link>
        <Link to={routes.windsurfSails()}>WindSurf Sails</Link>
        <Link to={routes.users()}>Users</Link>
        {/* <Link to={routes.login()}>login</Link> */}
      </div>
    </div>
  )
}

export default Menu
