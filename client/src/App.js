import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Project from './pages/Project/project'
import Resume from './pages/Resume/resume'
import NotFound from './pages/ NotFound/ NotFound';
import './App.css';


function App() {
  return (

   <Router>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>} />
      <Route path="*" element={<NotFound />} />

    </Routes>
   </Router>
  
  );
}

export default App;
