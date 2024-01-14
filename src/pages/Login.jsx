// Login.jsx
import React, { useState } from 'react';
import { Button, Input } from 'antd'; 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
       // console.log(`המשתמש התחבר עם דוא"ל: ${email} וסיסמא: ${password}`);
    };

    return (
        <div className="user-container">
            <h1>ברוך שובך! אנא התחבר על מנת להינות ממתכוני האתר</h1>
            <div className="login-container">
                <form id="user-form">
                    <div className="label-input-container">
                        <label htmlFor="username">דואר אלקטרוני:</label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="label-input-container">
                        <label htmlFor="password">סיסמא:</label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="label-input-container">
                        <Button> כניסה</Button>
                    </div>
                    <br></br>
                    <div className="label-input-container">
                        <Button>כניסת אורח</Button>
                    </div>
                    <br></br>
                </form>
                <p className="registration-link"> עדיין לא רשום? <a href="http://localhost:3000/">לחץ כאן: להרשמה</a></p>
            </div>
        </div>
    );
};

export default Login;
