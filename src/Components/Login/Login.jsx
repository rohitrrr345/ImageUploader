// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css";
import { loginUser } from '../../Actions/authActions';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Uploader
        </Typography>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       

        <Button type="submit">Login</Button>

        <Link to="/signup">
          <Typography>New User?</Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
