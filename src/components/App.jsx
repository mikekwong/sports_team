import React, { Component } from 'react'
import theSportsDb from '../api/theSportsDb'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      details: [],
      error: null,
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      const { data } = await theSportsDb.get(
        `/searchteams.php?t=new_york_red_bulls`
      )
      console.log(data.teams[0])
      this.setState({
        details: data.teams[0],
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
    const { details, isLoading } = this.state
    return (
      <div className='container'>
        {!isLoading ? (
          <>
            <Header details={details} />
            <Hero details={details} />
            <Content details={details} />
          </>
        ) : (
          <p>...Loading</p>
        )}
      </div>
    )
  }
}
