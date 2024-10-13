import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from './Components/ImageGallary';
import Login from './Components/Login/Login';
import ImageUpload from './Components/Upload/imageUpload';
import { loadUser } from './Actions/authActions';
import Signup from './Components/SignUp/Signup';
import Header from './Components/Header/Header';
import './App.css'
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
      {isAuthenticated && <Header />}

        <Routes>
          {/* Show ImageGallery if authenticated, else show Login */}
          <Route
            path='/gallary'
            element={isAuthenticated ? <ImageGallery /> : <Login />}
          />
              <Route path='/upload' element={isAuthenticated ? <ImageUpload /> : <Login />}/>

    <Route path='/signup' element={isAuthenticated ? <ImageGallery /> : <Signup />}/>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
