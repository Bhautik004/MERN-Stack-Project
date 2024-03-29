import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home  from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';


const App = () => {
  return (
    <>
   
    
      <Navbar/>   

      <Routes>
        <Route exact path="/" element={<Home />} />         
        <Route path="/about" element={<About />} />         
        <Route path="/contact" element={<Contact />} />         
        <Route path="/login" element={< Login/>} />         
        <Route path="/signup" element={<SignUp />} />         
        <Route  path="*" element={<ErrorPage />} />         
      </Routes>
      
    </>
    
   
  )
}

export default App
