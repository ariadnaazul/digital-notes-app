import React from 'react'
import Desktop from '../assets/Desktop.jpg'

function GroupCard({groupName, groupLength}) {
  
  return (
    <div className='group-card'>
      <p className='card-title'>{groupName}</p>
      <p>{groupLength} Items</p>
      <p className='options-dots'>. . . </p>
      <img src={Desktop} alt="" />
    </div>
  )
}

export default GroupCard