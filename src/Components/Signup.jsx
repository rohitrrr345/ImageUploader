// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../actions/authActions';

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
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Step 3: Input field for username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
