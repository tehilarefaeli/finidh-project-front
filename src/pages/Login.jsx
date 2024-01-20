import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        window.location.href = '/account';
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-container">
      <div className="welcome-container">
        <h1 className="welcome-header">
          <center>
            Welcome back!
            <br />
            you should register to enjoy the site's recipes
          </center>
        </h1>
      </div>
      <br />
      <div className="login-container">
        <form id="user-form">
          <div className="label-input-container">
            <label htmlFor="username"> Email </label>
            <Input
              type="text"
              id="username"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="label-input-container password-input">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="button-container">
            <Button onClick={handleLogin}>Login</Button>
            <Button>Guest </Button>
          </div>
        </form>
        <p className="registration-link">
          <span className="registration-text">  Not registered yet? </span>
          <a href="http://localhost:3000/signup" className="registration-link">Click here to register  </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
