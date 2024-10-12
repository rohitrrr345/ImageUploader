import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import toast,{ Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Signup/>}/>
    </Routes>
    <Toaster />
   </Router>
   </>
  )
}

export default App