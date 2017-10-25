import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'
import App, { onAuth } from '../imports/client/components/App'


Meteor.startup(() => {
  Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId()
    onAuth(isAuthenticated)
  })
  ReactDOM.render(<App />, document.getElementById('app'))
});
