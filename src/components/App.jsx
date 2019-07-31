import React, { Component } from 'react'
import theSportsDb from '../api/theSportsDb'
import SearchBar from './SearchBar'
import TeamList from './TeamList'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      teams: [],
      info: '',
      error: null,
      isLoading: true
    }
  }

  onSearchSubmit = async term => {
    try {
      const { data } = await theSportsDb.get(`/searchteams.php?t=${term}`)
      this.setState({
        info: 'Teams Found',
        teams: data.teams,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  render () {
    const { teams, info, isLoading } = this.state
    return (
      <div className='container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {!isLoading ? (
          <TeamList teams={teams} info={info} />
        ) : (
          <p>...Loading</p>
        )}
      </div>
    )
  }
}
