// Login.jsx
import React, { useState } from 'react';
import { Button, Input } from 'antd'; 

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');

    const handleLogin = () => {
        // לטובת הדוגמה, אפשר להדפיס את הנתונים לקונסולה
        console.log(`המשתמש התחבר עם דוא"ל: ${email} וסיסמא: ${password}`);
    };

    const handleRegistration = () => {
        // לטובת הדוגמה, אפשר להדפיס את הנתונים לקונסולה
        console.log(`נרשמת עם שם משתמש: ${username}, סיסמא: ${password}, שם כינוי: ${nickname}, גיל: ${age},`);
    };

    return (
        <div className="user-container">
            <h1>הרשמה לאתר</h1>
            <div className="login-container">
                <form id="user-form">
                    <div className="label-input-container">
                        <label htmlFor="email">דואר אלק:טרוני</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="label-input-container">
                        <label htmlFor="password">סיסמא</label>
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
                        <label htmlFor="nickname">הכינוי שלי באתר</label>
                        <Input
                            type="nickname"
                            id="nickname"
                            name="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="label-input-container">
                        <label htmlFor="age">גיל</label>
                        <Input
                            type="age"
                            id="age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="button-container">
                        <Button type="button" onClick={handleLogin}>
                            צור משתמש
                        </Button>
                        
                    </div>
                </form>
                <br></br>
            </div>
        </div>
    );
};

export default Signup;
