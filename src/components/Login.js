
// Component for Login page

import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, loginData } = useAuth();  // custom hook to handle all apis 

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(()=>{
    setUsername("");
    setPassword("");
    
    const inputs = formRef.current.querySelectorAll('input');
    inputs.forEach(input => input.blur());

  }, [loginData])

  return (
    <div className="login">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="username">Username/Email</label>
          <input
            type="text"
            id="username"
            value={username}
            maxLength={25}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            maxLength={12}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {loginData && <p style={{ color: 'blue' }}>{"Successfully LoggedIn!"}</p> }
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
