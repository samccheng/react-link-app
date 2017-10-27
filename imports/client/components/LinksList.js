import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'
import { Links } from '../../api/links'
import LinkListItem from './LinkListItem'

export default class LinksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links')
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch()
      this.setState({ links })
    })
  }

  componentWillUnmount() {
    this.linksTracker.stop()
    console.log('unmounted')
  }

  renderLinksListItem() {
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id)
      return <LinkListItem key={link._id} shortUrl={shortUrl} {...link} />
    })
  }

  render() {
    return (
      <div>
        <p>links list</p>
        <div>{this.renderLinksListItem()}</div>
      </div>

    )
  }
}
