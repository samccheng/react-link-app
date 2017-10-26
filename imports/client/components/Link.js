import React from 'react'
import AddLink from './AddLink'
import LinksList from './LinksList'
import PrivateHeader from './PrivateHeader'

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Your links"/>
      <LinksList />
      <AddLink />
    </div>
  )
}

export default Link
