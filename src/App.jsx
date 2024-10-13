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
  const { isAuthenticated,user,  message, error, loading } = useSelector(
    state => state.auth || {}
  );

  const dispatch = useDispatch();

  // Monitor changes in isAuthenticated and loading
  useEffect(() => {
    console.log('isAuthenticated changed:', isAuthenticated);
  }, [isAuthenticated]);

  // Handle errors and messages

  // Load user on component mount
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
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
          <Route path='/login' element={ <Login />}/>

          <Route
            path='/'
            element={isAuthenticated ? <ImageGallery username={user.username} /> : <Login />}
          />
{console.log(user?.username)
}          <Route
            path='/gallary'
            element={isAuthenticated ? <ImageGallery username={user.username} /> : <Login />}
          />
              <Route path='/upload' element={isAuthenticated ? <ImageUpload /> : <Login />}/>

    <Route path='/signup' element={isAuthenticated ? <ImageGallery username={user.username} /> : <Signup />}/>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
