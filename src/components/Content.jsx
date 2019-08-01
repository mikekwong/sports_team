import React from 'react'

const Content = ({ details }) => {
  const { strDescriptionEN } = details
  return (
    <div className='content_container'>
      <div className='description'>
        <p>{strDescriptionEN}</p>
      </div>
    </div>
  )
}

export default Content
