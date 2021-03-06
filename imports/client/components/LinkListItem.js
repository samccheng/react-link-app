import { Meteor } from 'meteor/meteor'
import React from 'react'
import PropTypes from 'prop-types'
import Clipboard from 'clipboard'
import moment from 'moment'

export default class LinkListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'copy'
    }
  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.copy)

    this.clipboard.on('success', () => {
      this.setState(() => ({ text: 'copied' }))
      return setTimeout(() => {
        this.setState(() => ({ text: 'copy' }))
      }, 1000)
    }).on('error', () => {
      alert('error')
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits'
    let visitedMessage = null

    if(typeof this.props.lastVisited === 'number') {
      visitedMessage = `(visited) ${ moment(this.props.lastVisited).fromNow()}`
    }
    return (
      <p className="item__message">{this.props.visitedCount} {visitMessage} {visitedMessage}</p>
    )
  }

  render() {
    return (
      <div className="item">
        <h2>{this.props.url}</h2>
        <p className="item__message">{this.props.shortUrl}</p>
        {this.renderStats()}
        <a className="button button--pill button--link" href={this.props.shortUrl} target="_blank">visit</a>
        <button
          className="button button--pill"
          ref={copy => this.copy = copy}
          data-clipboard-text={this.props.shortUrl}
        >
          {this.state.text}
        </button>
        <button className="button button--pill" onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
        }}>{this.props.visible ? 'hide' : 'unhide'}</button>
      </div>
    )
  }
}

LinkListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisited: PropTypes.number
}
