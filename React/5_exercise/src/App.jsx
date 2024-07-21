import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Cardcontainer from './components/Cardcontainer'


function App() {
  const [count, setCount] = useState(0)
  // console.log("hello");
  return (
    <>
      <Navbar/>
      <Cardcontainer/>
    </>
  )
}

export default App
