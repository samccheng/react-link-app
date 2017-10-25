import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'
import App, { history } from '../imports/client/components/App'

const unAuthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/link']


Meteor.startup(() => {
  Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId()
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
  })
  ReactDOM.render(<App />, document.getElementById('app'))
});
