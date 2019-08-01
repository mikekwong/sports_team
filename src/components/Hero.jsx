import React from 'react'

const Hero = ({ details }) => {
  const {
    strTeamFanart2,
    strLeague,
    strGender,
    strStadium,
    strStadiumLocation
  } = details
  return (
    <div className='hero_container'>
      <div className='hero_headline'>
        <p>{strLeague}</p>
      </div>
      <div className='hero_stadiuminfo'>
        <p>{strGender} Team</p>
      </div>
      <div className='stadium'>
        <div className='gradient'>
          <img className='teampic' alt='red bulls team' src={strTeamFanart2} />
        </div>
      </div>
    </div>
  )
}

export default Hero
