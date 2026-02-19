import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import UserList from './components/UserList'
import Statistics from './components/statistics'
import { useAuth } from './context/AuthContext'
import {useLocalStorage} from './hooks/useLocalStorage'
import { useState } from 'react'

function App() {
  const {user, logout} = useAuth();
  const [users, setUsers] = useLocalStorage("gym-users", []);
  const [showStatistics, setShowStatistics] = useState(false);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Header />
      <p className="welcome">Bienvenido, {user.displayName}</p>
      <button className="logout-btn" onClick={logout}>Cerrar Sesion</button>
      <RegisterForm users={users} setUsers={setUsers} onShowStatistics={() => setShowStatistics(true)} />
      {showStatistics ? (
        <Statistics users={users} onBack={() => setShowStatistics(false)} />
      ) : (
        <UserList users={users} setUsers={setUsers} />
      )}
    </div>
  )
}

export default App
