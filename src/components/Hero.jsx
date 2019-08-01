import React from 'react'

const Hero = ({ details }) => {
  const { strTeamFanart2, strLeague } = details
  return (
    <div className='hero_container'>
      <div className='hero_text'>
        <p>{strLeague}</p>
      </div>
      <div className='stadium'>
        {/* <div className='gradient' /> */}
        <div className='gradient' />
        <img className='teampic' src={strTeamFanart2} alt='team picture' />
      </div>
    </div>
  )
}

export default Hero
