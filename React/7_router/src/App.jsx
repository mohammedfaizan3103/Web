import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

function App() {
    const [count, setCount] = useState(0)
    const router = createBrowserRouter([
        {
            path: '/', 
            element: <><Navbar/><Home/></>
        },
        {
            path: '/about', 
            element: <><Navbar/><About/></>
        },
        {
            path: '/Login', 
            element: <><Navbar/><Login/></>
        },
        {
            path: 'user/:username',
            element: <><Navbar/><User/></>
        }
    ])
    return (
        <>
            <RouterProvider router = {router}/>
        </>
    )
}

export default App
