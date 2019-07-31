import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='search-input'
            placeholder='Search teams...'
            type='text'
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
        <button type='submit' className='submit'>
          Search
        </button>
      </div>
    )
  }
}
