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
import Loader from './Components/Loader/Loader';
const App = () => {
  const { isAuthenticated,user,  message, error, loading } = useSelector(
    state => state.auth || {}
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('isAuthenticated changed:', isAuthenticated);
  }, [isAuthenticated]);


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

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      <Router>
      {isAuthenticated && <Header />}

        <Routes>
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
