
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'password') {
      // Store login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect to Admin.js when logged in
      navigate('/admin');
    } else {
      alert('Invalid email or password');
      navigate('/')
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-groups ">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email"  name="email"placeholder="Enter your email"requiredvalue={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-groups">
          <label htmlFor="password" >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;

