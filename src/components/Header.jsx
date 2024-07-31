import React from 'react'
import './Header.css'

function Header({text}) {
  return (
    <div className='header'>
      <p className='header_name'>{text}</p>
    </div>
  )
}

export default Header