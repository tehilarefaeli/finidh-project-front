import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // חיבור קובץ העיצוב

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // כאן ניתן לבדוק אם המשתמש כבר מחובר ולעבור ישירות לעמוד הפרופיל
    // לדוג', בעזרת JWT או בדרך אחרת.
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        // בדיקות נוספות כמו בדיקה של הסיסמה וכדומה

        // במקרה שהכניסה הוצלחה, נשאיר את ההבאה ל-useEffect
        navigate('/profile');
      } else {
        // טיפול בסטטוסים השונים של הבקשה
        alert('The login failed.');
      }
    } catch (error) {
      // טיפול בשגיאות
      console.error(error.response); // ידפיס את התגובה מהשרת
      alert('An error occurred.');
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
