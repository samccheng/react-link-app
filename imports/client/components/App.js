import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Signup from './Signup'
import Link from './Link'
import NotFound from './NotFound'
import Login from './Login'

export const history = createHistory()

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/link" component={Link}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
