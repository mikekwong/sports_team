import React from 'react'

const Header = ({ details }) => {
  const { strTeam, strTeamBadge, intFormedYear } = details
  return (
    <div>
      <header className='header_container'>
        <div className='logo'>
          <img src={strTeamBadge} alt='Red Bull Team Logo' />
          <div className='logo-copy'>
            <p>{strTeam.toUpperCase()}</p>
            <p>{intFormedYear} - 2019</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
