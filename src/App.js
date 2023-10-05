import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About'
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
