import React from 'react'
import { history } from './App'

export default class Link extends React.Component {
  onLogout () {
    history.push('/')
  }

  render() {
    return (
      <div>
        link
        <button onClick={this.onLogout.bind(this)}>logout</button>
      </div>
    )
  }
}
