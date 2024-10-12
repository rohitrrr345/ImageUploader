import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/authActions';
import ImageGallery from './Components/ImageGallary';
import Login from './Components/Login/Login';

const App = () => {
  const { isAuthenticated,  message, error, loading } = useSelector(
    state => state.auth || {}
  );

  const dispatch = useDispatch();

  // Monitor changes in isAuthenticated and loading
  useEffect(() => {
    console.log('isAuthenticated changed:', isAuthenticated);
  }, [isAuthenticated]);

  // Handle errors and messages
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  // Load user on component mount
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // Show loading spinner if still fetching user data
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Router>
        <Routes>
          {/* Show ImageGallery if authenticated, else show Login */}
          <Route
            path='/login'
            element={isAuthenticated ? <ImageGallery /> : <Login />}
          />
          <Route path='/' element={<Signup />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
