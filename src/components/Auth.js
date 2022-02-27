import React, { useState } from "react";

export default function Auth({setAuth}){
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    return(
        <div className="auth">
            <form onSubmit={(e) => {
                e.preventDefault()
                return process.env.REACT_APP_PASSWORD===password ? setAuth(true) : null;
            }}>
                <input type='text' autoComplete="username" value={username} hidden={true} onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" autoComplete="new-password" placeholder="hasło" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input className="primary" type='submit' value='zaloguj'/>
            </form>
        </div>
        
    )
}