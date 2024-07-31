import React from 'react'
import Header from './Header'
import './User_Home.css'
import Button from './Button'
import Form from './Form'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


function User_Home() {
  return (
    <div className='User_Home'>
      <Header text={"User's Quotes"} />
      {/* <Button/> */}
      {/* <Form type={"email"} placeholder={"Enter your email."}/> */}
      <h1>Please log in to see and add your quotes.</h1>
      <div>
        <p>
          If you already have an account
          <Link to="/login">
            Login
          </Link>
        </p>
        <p>
          If you do not have an account
          <Link to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>

  )
}

export default User_Home