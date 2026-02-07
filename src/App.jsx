import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import RegisterForm from './components/RegisterForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log("usuarios registrados", users);    
  }, [users]);

  return (
    <div>
      <Header />
      <RegisterForm users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  )
}

export default App
