import React, { useContext, useState} from 'react';
import './Signup.css'
import Header from './Header'
import Form from './Form'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { EmailContext } from './Quote_Context';

function Signup() {
  const { setEmail } = useContext(EmailContext);
  const [inputs, setInputs] = useState([
    { type: 'text', placeholder: 'Enter your name', value: ''},
    { type: 'email', placeholder: 'Enter your email', value: '' },
    { type: 'password', placeholder: 'Enter your password', value: '' }
  ]);
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
    setEmail(newInputs[1].value);
  }
  

  const handleSignup = () => {
    const newUser = {
      name: inputs[0].value,
      email: inputs[1].value.trim(),
      password: inputs[2].value,
    };

    if (newUser.email === '' || newUser.password === '' || newUser.name === ''){
      alert('Please fill in all inputs for name, email and password.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(existingUsers));
    navigate('/login')
  };
  return (
    <div className='Signup'>
      <Header text={"Sign up to create an account"} />
      <div className='Signup_Form'>
        <Form inputs={inputs} onChange={handleInputChange} />
        <Button className="Signup_Btn" text={"Sign up"} onClick={handleSignup} />
      </div>
    </div>
  );
}

export default Signup;