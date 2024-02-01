import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // חיבור קובץ העיצוב
import PostRequest from '../helpers/postRequest'
import GetRequest from '../helpers/getRequest';
import { Link } from 'react-router-dom';

function Login() {
   const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
   
//  const [user,setuser] = useState();

  
//     console.log("e",email)
//    console.log("p",password)
  



//   useEffect(() => {
//      GetRequest('/api/login', {
//       email,
//       password
//     }).then(res => {
//       console.log("user:" + res);
//             setuser(res)
//     }
//     ).catch(e => console.log(e))
    
//   }, []);


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
            <Link to ="/profile?email=${email}?password=${password}">
            <Button>Login</Button>
            </Link>
            <Button>Guest </Button>
          </div>
        </form>
        <p className="registration-link">
          <span className="registration-text"> Not registered yet? </span>
          <a href="http://localhost:3000/signup" className="registration-link">
            Click here to register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;