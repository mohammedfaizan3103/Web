import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Content';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Content from './components/Content';

function App() {

  return (
    <>
        <Navbar />
        <Content/>
    </>
  )
}

export default App
