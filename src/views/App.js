import './App.css';
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import API from '../util/API'
import Nav from '../components/Nav'
import Home from './Home'
import Login from './login'
import Hunts from './Hunts'

function App() {
  const [userId, setUserId] = useState(0)
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data => {
        if (data.user) {
          console.log(data)
          setToken(storedToken)
          setIsLoggedIn(true)
          setUserId(data.user.id)
          setUsername(data.user.username)
        }
      })
    } else {
      console.log('no stored token')
    }
  }, [])

<<<<<<< HEAD
  const handleLoginSubmit = user=>{
    API.login(user).then(data=>{
=======
  const handleLoginSubmit = userObj => {
    API.login(userObj).then(data => {
>>>>>>> origin
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUsername(data.user.email)
        localStorage.setItem("token", data.token)
      }
    })
  }

  const handleSignupSubmit = userObj => {
    API.signup(userObj).then(data => {
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUsername(data.user.username)
        localStorage.setItem("token", data.token)
      }
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserId(0);
    setToken("");
    setUsername("")
  }

  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
<<<<<<< HEAD
          <Route path="/login" element={<Login
           handleLoginSubmit={handleLoginSubmit}
            />}/>
          <Route path="/" element={<Home/>} />
=======
          <Route path="/" element={<Home />} />
          <Route path="/hunts" element={<Hunts />} />
          <Route path="/login" element={<Login />}
            handleLoginSubmit={handleLoginSubmit} />
>>>>>>> origin
        </Routes>
      </Router>
    </div>
  );
};

export default App;
