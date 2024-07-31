import React from 'react'
import './Form.css'

function Form({ inputs = [], onChange }) {
  return (
    <div>
      <form className='Form'>
        {inputs.map((input, index) => (
        <input
          key={index}
          className= "Form_input"
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={(e) => onChange(index, e.target.value)}
          />
        ))

        }
      </form>
    </div>
  )
}

export default Form;
