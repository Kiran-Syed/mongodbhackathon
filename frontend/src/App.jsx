import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signup from './pages/signup';
import Login from './pages/login';


function App(){

  return (
    <>
     {/* <Signup/> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
    
    </>
  )
}

export default App
