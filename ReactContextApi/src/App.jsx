import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider> 
      <h1>React Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
