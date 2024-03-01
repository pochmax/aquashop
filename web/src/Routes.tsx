// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, PrivateSet } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="WindsurfBoards" titleTo="windsurfBoards" buttonLabel="New WindsurfBoard" buttonTo="newWindsurfBoard">
        <Route path="/windsurf-boards/new" page={WindsurfBoardNewWindsurfBoardPage} name="newWindsurfBoard" />
        <Route path="/windsurf-boards/{id:Int}/edit" page={WindsurfBoardEditWindsurfBoardPage} name="editWindsurfBoard" />
        <Route path="/windsurf-boards/{id:Int}" page={WindsurfBoardWindsurfBoardPage} name="windsurfBoard" />
        <Route path="/windsurf-boards" page={WindsurfBoardWindsurfBoardsPage} name="windsurfBoards" />
      </Set>
      <Set wrap={ScaffoldLayout} title="WindsurfSails" titleTo="windsurfSails" buttonLabel="New WindsurfSail" buttonTo="newWindsurfSail">
        <Route path="/windsurf-sails/new" page={WindsurfSailNewWindsurfSailPage} name="newWindsurfSail" />
        <Route path="/windsurf-sails/{id:Int}/edit" page={WindsurfSailEditWindsurfSailPage} name="editWindsurfSail" />
        <Route path="/windsurf-sails/{id:Int}" page={WindsurfSailWindsurfSailPage} name="windsurfSail" />
        <Route path="/windsurf-sails" page={WindsurfSailWindsurfSailsPage} name="windsurfSails" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
      </Set>
      {/* <PrivateSet unauthenticated="login">
        <Route path="/admin" page={AdminPage} name="admin" />
        <Route path="/secret-page" page={SecretPage} name="secret" />
      </PrivateSet> */}
      <Route path="/" page={HomePage} name="homePage" />
      <Set wrap={ScaffoldLayout} title="WindsurfSails" titleTo="windsurfSails" buttonLabel="New WindsurfSail" buttonTo="newWindsurfSail">
      </Set>
      <Set wrap={ScaffoldLayout} title="WindsurfBoards" titleTo="windsurfBoards" buttonLabel="New WindsurfBoard" buttonTo="newWindsurfBoard">
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
