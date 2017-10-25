import React from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value.trim()
    const password = e.target.password.value.trim()
    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState(() => ({ error: err.reason }))
      } else {
        this.setState(() => ({ error: '' }))
      }
    })
  }

  render() {
    return (
      <div>
        <h1>signup</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined }
        <form onSubmit={this.onSubmit}>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button className="button">create account</button>
        </form>
        <Link to="/">already have an account?</Link>
      </div>
    )
  }
}
