// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="WindsurfSails" titleTo="windsurfSails" buttonLabel="New WindsurfSail" buttonTo="newWindsurfSail">
        <Route path="/windsurf-sails/new" page={WindsurfSailNewWindsurfSailPage} name="newWindsurfSail" />
        <Route path="/windsurf-sails/{id:Int}/edit" page={WindsurfSailEditWindsurfSailPage} name="editWindsurfSail" />
        <Route path="/windsurf-sails/{id:Int}" page={WindsurfSailWindsurfSailPage} name="windsurfSail" />
        <Route path="/windsurf-sails" page={WindsurfSailWindsurfSailsPage} name="windsurfSails" />
      </Set>
      <Set wrap={ScaffoldLayout} title="WindsurfBoards" titleTo="windsurfBoards" buttonLabel="New WindsurfBoard" buttonTo="newWindsurfBoard">
        <Route path="/windsurf-boards/new" page={WindsurfBoardNewWindsurfBoardPage} name="newWindsurfBoard" />
        <Route path="/windsurf-boards/{id:Int}/edit" page={WindsurfBoardEditWindsurfBoardPage} name="editWindsurfBoard" />
        <Route path="/windsurf-boards/{id:Int}" page={WindsurfBoardWindsurfBoardPage} name="windsurfBoard" />
        <Route path="/windsurf-boards" page={WindsurfBoardWindsurfBoardsPage} name="windsurfBoards" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
