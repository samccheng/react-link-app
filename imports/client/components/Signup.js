import React from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>signup</h1>
        <Link to="/">already have an account?</Link>
      </div>
    )
  }
}
