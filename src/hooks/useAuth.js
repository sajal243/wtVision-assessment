
// Custom hook for all api call

import { useState } from 'react';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useState(null);

  const login = async (username, password) => {

    setIsLoading(true);
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

   // hard coding the username/email ...because of dummy api 
    const raw = JSON.stringify({
    "email": "john@mail.com",
    "password": "changeme"
    });

    try {
      // Replace this with your actual login API call
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Handle successful login (e.g., save token, redirect)
      console.log('Login successful:', data);
      setLoginData(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, loginData };
};
