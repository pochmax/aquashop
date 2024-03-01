import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, logOut, currentUser, hasRole } = useAuth()
  console.log('client', useAuth().hasRole)
  const curr = currentUser
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <h1>Bienvenue sur le site de Aquashop</h1>
      <p>{JSON.stringify({ isAuthenticated })}</p>
      <p>{JSON.stringify({ curr })}</p>
      <p>{JSON.stringify({ hasRole })}</p>

      <Link to={routes.login()}>Login</Link>
      <button onClick={logOut}>logout</button>
    </>
  )
}

export default HomePage
