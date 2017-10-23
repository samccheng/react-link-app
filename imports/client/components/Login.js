import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
    <div>
      <h1>login</h1>
      <Link to="/signup">hava an account?</Link>
    </div>
    )
  }
}
