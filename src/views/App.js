import './App.css';
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from './Home'
import Login from './Login'
import Hunts from './Hunts'
import Profile from './Profile'
import Game from './Game'
import Users from './Users';
import Huntform from './Huntform';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('user'))
    if (storedToken) {
      setToken(storedToken.token)
      setIsLoggedIn(true)
    }
  }, [token])

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  }

  return (
    <div className='App'>
      <Router>
        <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/hunts" element={<Hunts />} />
          <Route path="/login"
            element={<Login
              isLoggedIn={isLoggedIn}
            />} />
          <Route path="/profile"
            element={<Profile
              isLoggedIn={isLoggedIn}
            />} />
          <Route path="/huntform"
            element={<Huntform
              isLoggedIn={isLoggedIn}
            />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App
