import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Login from './login';
import Home from './Home'
import Hunts from '../components/Counter';
import {useEffect, useState} from "react";
import API from "../util/API";

function App() {
  const [userId, setUserId] = useState(0)
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    if(storedToken){
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data=>{
        if(data.user){
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
  },[])

  const handleLoginSubmit = userObj=>{
    API.login(userObj).then(data=>{
      console.log(data);
      if(data.token){
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUsername(data.user.email)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const handleSignupSubmit = userObj=>{
    API.signup(userObj).then(data=>{
      console.log(data);
      if(data.token){
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUsername(data.user.username)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const handleLogout = ()=>{
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
          <Route path="/login" element={<Login/>}
           handleLoginSubmit={handleLoginSubmit} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
