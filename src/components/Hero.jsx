import React from 'react'

const Hero = ({ details }) => {
  const { strTeamFanart2, strLeague } = details
  return (
    <div className='hero_container'>
      <div className='stadium'>
        {/* <div className='gradient' /> */}
        <p>{strLeague}</p>
        <div className='gradient' />

        <img className='teampic' src={strTeamFanart2} alt='team picture' />
      </div>
    </div>
  )
}

export default Hero
