import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Links } from '../../api/links'

export default class AddLink extends React.Component {
  onSubmit(e) {
    const url = e.target.url.value.trim()

    e.preventDefault()

    if(url) {
      // console.log(url)
      // Links.insert({ url, userId: Meteor.userId() })

      Meteor.call('links.insert', url)
      e.target.url.value= ''
    }


  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name="url" placeholder="URL" />
          <button>add link</button>
        </form>
      </div>
    )
  }
}
