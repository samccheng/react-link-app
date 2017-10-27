import React from 'react'
import { Accounts } from 'meteor/accounts-base'

const PrivatHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => Accounts.logout()}>logout</button>
    </div>
  )
}

export default PrivatHeader
