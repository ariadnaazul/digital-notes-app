import React from 'react'
import Patron from '../assets/Patron.png'



function Board() {
  return (
    <div id="board">
        <div className="patron">
            <img  src={Patron} alt="" />
            <img  src={Patron} alt="" />
            <img  src={Patron} alt="" />
            <img  src={Patron} alt="" />
            <img  src={Patron} alt="" />
        </div>
        
    </div>
  )
}

export default Board