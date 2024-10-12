
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../actions/authActions';
import { Button, Typography } from '@mui/material';
import './Signup.css'
const Signup = () => {
  const [username, setUsername] = useState(''); // Step 1: State for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        username: username, // Make sure you have a state for username
        email: email,
        password: password,
      };
    // Step 2: Include username in the dispatched action
    dispatch(signupUser(userData));
    
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
       Messanger
        </Typography>


        <input
          type="text"
          value={username}
          placeholder="Name"
          className="registerInputs"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/signup">
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>

        <Button disabled={loading} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
