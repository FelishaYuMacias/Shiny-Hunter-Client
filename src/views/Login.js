import React, {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
  const navigate = useNavigate();
  useEffect(()=>{
      if(props.isLoggedIn){
          navigate("/profile")
      }
  },[props.isLoggedIn])
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signupUsername, setSignupUsername] = useState("")
    const [signupPassword, setSignupPassword] = useState("")

    let history = useNavigate();
    
    const token = localStorage.getItem("token")
    const loginHandle=e=>{
      e.preventDefault();
      props.handleLoginSubmit({
        username:loginUsername,
        password:loginPassword
      })
      if (token === true){
        history.push("/")
      }
    }
    const signupHandle=e=>{
        e.preventDefault();
        props.handleSignupSubmit({
          username:signupUsername,
          password:signupPassword
        })
      }
   
  return (
    <div>
    <form onSubmit={loginHandle}>
      <h3>Login</h3>
      <input name="username"  placeholder = "Username" value={loginUsername} onChange={e=>setLoginUsername(e.target.value)}/>
      <input type="password" name="password" placeholder = "Password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
      <button>Log in!</button>
    </form>
    <form onSubmit={signupHandle}>
      <h3>Signup</h3>
      <input name="username" placeholder = "Username" value={signupUsername} onChange={e=>setSignupUsername(e.target.value)}/>
      <input type="password" name="password" placeholder = "Password" value={signupPassword} onChange={e=>setSignupPassword(e.target.value)}/>
      <button>Signup!</button>
    </form>
    
    </div>
  )
}
