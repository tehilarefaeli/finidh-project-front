import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './Signup.css';
import PostRequest from '../helpers/postRequest';
import { useNavigate } from 'react-router-dom';

function Signup({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async () => {
    console.log(`נרשמת עם שם משתמש: ${email}, סיסמא: ${password}, שם כינוי: ${name}, גיל: ${age}`);
    const body = {
      name,
      age,
      email,
      password,
    };

    try {
      await PostRequest('users/register', body);
      navigate('/');
      setUser(body)
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='user-container'>
      <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive" }}>
        SWEETIME
      </h1>
      <h1 className='welcome-header'>Enter the details for registration</h1>
      <br></br>
      <div className='login-container'>
        <form id='user-form'>
          <div className='label-input-container'>
            <label htmlFor='email'>Email </label>
            <Input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='label-input-container'>
            <label htmlFor='password'>Password</label>
            <Input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className='label-input-container'>
            <label htmlFor='nickname'>Nickname </label>
            <Input type='text' id='nickname' name='nickname' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='label-input-container'>
            <label htmlFor='age'>Age</label>
            <Input type='number' id='age' name='age' value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <br></br>

          <div className='button-container'>
            <Button type='button' onClick={handleRegistration}>
              Create a user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
