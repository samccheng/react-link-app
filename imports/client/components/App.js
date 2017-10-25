import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Signup from './Signup'
import Link from './Link'
import NotFound from './NotFound'
import Login from './Login'


export const history = createHistory()

const onLoginPublicPage = () => (
  Meteor.userId() ? (<Link />) : (<Login />)
)

const onSignUpPublicPage = () => (
  Meteor.userId() ? (<Link />) : (<Signup />)
)

const onEnterPrivatePage = () => (
  !Meteor.userId() ? (<Signup />) : (<Link />)
)

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" render={onLoginPublicPage} />
          <Route path="/signup" render={onSignUpPublicPage} />
          <Route path="/link" render={onEnterPrivatePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}


export default App
