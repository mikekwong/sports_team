import React from 'react'

const Hero = ({ details }) => {
  const { strTeamFanart1, strStadium, strStadiumLocation, strWebsite } = details
  return (
    <div className='hero_container'>
      <div className='hero_stadiuminfo'>
        <p>{strStadium}</p>
        <p>{strStadiumLocation}</p>
      </div>
      <div className='stadium'>
        <div className='gradient'>
          <img className='teampic' alt='red bulls team' src={strTeamFanart1} />
        </div>
      </div>
      <div className='website'>
        <a href='#'>{strWebsite}</a>
      </div>
    </div>
  )
}

export default Hero
