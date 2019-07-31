import React from 'react'
import theSportsDb from '../api/theSportsDb'

const TeamList = ({ details }) => {
  const { strTeam } = details
  return <div>{strTeam}</div>
}

export default TeamList
