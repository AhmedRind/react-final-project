import React from 'react';
import './Button.css'

function Button({onClick, text, className}) {
  return (
    <div className='button' onClick={onClick}>
      <h3 className={className}>{text}</h3>
    </div>
  )
}

export default Button