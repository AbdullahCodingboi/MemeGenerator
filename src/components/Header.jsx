import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
        <div className='logo'>
            <img className='image' src="/Troll-Face.svg" alt="" />
            <h2 style={{marginTop:"8px"}}>Meme Generator</h2>
        </div>
        <div>
          <h3 className='descp'>React Project</h3>
        </div>
    </div>
  )
}

export default Header