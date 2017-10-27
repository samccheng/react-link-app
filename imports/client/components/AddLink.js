import React from 'react'
import Modal from 'react-modal'
import { Meteor } from 'meteor/meteor'
import { Links } from '../../api/links'

export default class AddLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    }
  }
  onSubmit(e) {
    const { url } = this.state

    e.preventDefault()

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.handleModalClose()
      } else {
        this.setState({ error: err.reason })
      }
    })
  }

  onChange(e) {
    this.setState({ url: e.target.value })
  }

  handleModalClose() {
    this.setState({ isOpen: false, url: '', error: '' })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>+ Add Link</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Modal"
          onAfterOpen={() => this.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          >
          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              ref={ url => this.url = url }
              placeholder="URL"
              value={this.state.url}
              onChange={this.onChange.bind(this)}
            />
            <button>add link</button>
          </form>
          <button onClick={this.handleModalClose.bind(this)}>cancel</button>
        </Modal>
      </div>
    )
  }
}
