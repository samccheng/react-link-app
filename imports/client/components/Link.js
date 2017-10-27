import React from 'react'
import AddLink from './AddLink'
import LinksList from './LinksList'
import PrivateHeader from './PrivateHeader'
import LinksListFilter from './LinksListFilter'

export default () => {
  return (
    <div>
      <PrivateHeader title="Your links" />
      <LinksListFilter />
      <AddLink />
      <LinksList />
    </div>
  )
}
