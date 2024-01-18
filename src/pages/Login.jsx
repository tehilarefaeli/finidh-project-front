
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './Login.css'; 
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="user-container">
            <h1 className="welcome-header">Welcome back, you should register to enjoy the site's recipes</h1>
            <br></br>
            <div className="login-container">
                <form id="user-form">
                    <div className="input-container">
                        <label htmlFor="username"> Email</label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container password-input">
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
                    <span className="registration-text">  Not registered yet? </span>
                    <a href="http://localhost:3000/signup" className="registration-link">Click here to register  </a>
                </p>
            </div>
        </div>
    );
}

const handleLogin = async (e) => {
    e.preventDefault(); // מניעת התנהגות ברירת המחדל של הטופס

    try {
        const response = await axios.post('/api/login', {
            email,
            password

        });

        

        // טיפול בתגובת שרת מוצלחת (למשל, שמירת נתוני משתמש וניהול מעבר לרכיב האזור האישי)
        console.log(response.data);
    } catch (error) {
        // טיפול בשגיאות בקשת ההתחברות
        console.error(error);
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // מניעת התנהגות ברירת המחדל של הטופס
    
        try {
            const response = await axios.post('/api/login', {
                email,
                password
            });
    
            if (response.status === 200) {
                // ההתחברות הצליחה
    
                // שמירת נתוני המשתמש
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
    
                // ניתוב המשתמש לאזור האישי
                window.location.href = '/account';
            } else {
                // ההתחברות נכשלה
    
                // הצגת הודעה שגיאה
                alert(response.data.message);
            }
        } catch (error) {
            // טיפול בשגיאות בקשת ההתחברות
            console.error(error);
        }
    };
    
};




export default Login;
