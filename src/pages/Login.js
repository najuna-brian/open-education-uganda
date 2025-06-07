import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-page fade-in"
    
    style={{
        background: `linear-gradient(rgba(43, 65, 87, 0.7), rgba(26, 53, 80, 0.7)), url("/Assets/Image18.jpg") center/cover no-repeat`
      }}    
    >
      <div className="login-container"
    style={{
        background: `linear-gradient(rgba(41, 67, 93, 0.8), rgba(23, 59, 95, 0.8)), url("/Assets/Image45.jpg") center/cover no-repeat`,
      animation: "footerBgScroll 12s ease-in-out infinite alternate"
      }}
      >
        <h1>Login to Your Account</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <span>Don't have an account? <Link to="/register">Register</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;