import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
import Form from './Form';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [inputs, setInputs] = useState([
    { type: 'email', placeholder: 'Enter your email', value: '' },
    { type: 'password', placeholder: 'Enter your password', value: '' }
  ]);
  
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const trimmedEmail = inputs[0].value.trim();
    const password = inputs[1].value;

    if (trimmedEmail === '' || password === ''){
      alert('Please fill in both email and password.');
      return;
    }
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = storedUsers.find(user => user.email === trimmedEmail && user.password === password);
    if (matchedUser) {
      navigate('/quotes');
    } else {
      alert("User is not registered or credentials are incorrect.");
    }
  };

  return (
    <div className='Login'>
      <Header text={"Log in to Your Quotes"} />
      <div className='Login_Form'>
        <Form inputs={inputs} onChange={handleInputChange} />
        <Button className="Login_Btn" text={"Log in"} onClick={handleLogin} />
        <hr className='Login_Divider' />
        <Button className="Signup_Btn" text={"Sign up"} onClick={() => navigate('/signup')} />
      </div>
    </div>
  );
}

export default Login;
