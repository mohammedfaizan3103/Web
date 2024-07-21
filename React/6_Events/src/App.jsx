import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setform] = useState({username: "", password: ""})
  const Submit = useRef()
  const mouse = (event) => {
    let div = event.target
    div.style.backgroundColor = "green"
  }
  const handleChange = (event) => {
    setform({...form, [event.target.name]: event.target.value})
  }

  return (
    <>
      <div className="hovver" onMouseOver={mouse} onMouseLeave={(event) => event.target.style.backgroundColor = "red"}></div>
      <input type="text" name="username" value={form.username} onChange={handleChange} placeholder='username'/>
      <input type="text" name="password" value={form.password} onChange={handleChange}/>
      <input ref = {Submit} type="text" name="phone"/>
      <button onClick={async () => {
        console.log(await Submit.current.value);
      }}>Submit</button>
    </>
  )
}

export default App
