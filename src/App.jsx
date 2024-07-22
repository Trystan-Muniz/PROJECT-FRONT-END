import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Show from './components/Show'
import { Routes, Route } from 'react-router-dom'


function App() {


  return ( 
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games/:id" element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default App
