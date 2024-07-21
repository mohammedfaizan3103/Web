import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btnCheck, setbtnCheck] = useState(false)
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "Title 1",
      desc: "This is a todo"
    },
    {
      id: 1,
      title: "Title 2",
      desc: "This is another todo"
    },
    {
      id: 2,
      title: "Title 1",
      desc: "This is a todo"
    }
  ])  
  const Compo = () => {
    return (<>
    <button>This is a component</button>
    </>)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {
        // two ways to check if else conditionals
        // (btnCheck) ? <button>Btn is True That is why you are seeing this</button> : ""
        (btnCheck) && <button>Btn is True That is why you are seeing this</button>
      }
      <Compo/>  
      <div className="card">
        <button onClick={() => setbtnCheck(!btnCheck)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {
        todo.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          )
        })
      }
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
