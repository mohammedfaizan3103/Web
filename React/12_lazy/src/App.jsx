import './App.css'
import Navbar from './components/Navbar'
// import Time from './components/Time'
import { lazy, Suspense } from 'react'
const Time = lazy(() => import("./components/Time"))

function App() {

  return (
   <>
    <Navbar/>
    <Suspense fallback={<p>Loading...</p>}>
      <Time/>
    </Suspense>
   </>
  )
}

export default App
