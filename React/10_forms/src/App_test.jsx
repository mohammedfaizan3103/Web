import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let usernames = ['john.doe@gmail.com', 'me.iam@something.com', 'notme.notiam@notsomething.com']
  let passwords = ['abcd', 'efgh', 'ijkl']
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(false)
  const [error, seterror] = useState("")
  const handleuname = (event) => {
    setUsername(event.target.value)
  }
  const handlepass = (event) => {
    setPassword(event.target.value)
  }
  const submit = () => {
    let user = username
    let pass = password
    if(pass.length == 0) {
      seterror("password cannot be empty")
      return
    }
    if(user.length == 0) {
      seterror("username cannot be empty")
      return
    }

    for (let i = 0; i < usernames.length; i++) {
      const element = usernames[i];
      if(element == username) {
        if(passwords[i] == pass) {
          setLogged(true);
          setUsername("")
          setPassword("")
          return
        }
        else {
          seterror("Password incorrect")
          return
        }
      }
      
    }
    seterror("Username not found")
  }
  return (
    
    <>
      <div className="container">
        
          <input type="text" name='username' value={username} onChange={handleuname} placeholder='username'/>
          <input type="text" name='password' value={password} onChange={handlepass} placeholder='password' />
          <input type="submit" name='submit' onClick={submit}/>
        
      </div>
      {(logged) && <div>You are logged in</div>}
      {(!logged) && <div>{error}</div>}
    </>
  )
}

export default App
