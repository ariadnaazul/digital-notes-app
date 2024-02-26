import React from 'react'
import Profile from '../assets/Profile.png'

function Header({changeModalVisibility}) {
  return (
    <div id="header">
        <nav>
            <ul>
                <li className="nav-button" onClick={changeModalVisibility}>+ Note</li>
                <li className="nav-button">+ List</li>
                <li className="nav-button">+ Group</li>
                <li className='light'><em>Development & Design<br/>By Ariadna Trotta.</em></li>
            </ul>
            <div>
                <div>
                <img src={Profile} alt="" />
                <p><b>User Name</b></p>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Header