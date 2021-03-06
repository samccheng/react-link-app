import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Signup from './Signup'
import Link from './Link'
import NotFound from './NotFound'
import Login from './Login'

const unAuthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/link']

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

export const onAuth = (isAuthenticated) => {
  const pathname = history.location.pathname
  const unAuthenticatedPage = unAuthenticatedPages.includes(pathname)
  const authenticatedPage = authenticatedPages.includes(pathname)

  if (unAuthenticatedPage && isAuthenticated) {
    history.push('/link')
  } else if (authenticatedPage && !isAuthenticated) {
    history.push('/')
  }
  console.log(pathname)
  console.log('isAuthenticated', isAuthenticated)
}

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
