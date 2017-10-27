import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'
import App, { onAuth } from '../imports/client/components/App'
import { Links } from '../imports/api/links'
import '../imports/startup/simple-schema-config.js'


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  onAuth(isAuthenticated)
})


Meteor.startup(() => {
  Session.set('showVisible', true)
  ReactDOM.render(<App />, document.getElementById('app'))
});
