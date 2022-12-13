import React, {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
  const navigate = useNavigate();
  useEffect(()=>{
      if(props.isLoggedIn){
          navigate("/profile")
      }
  },[props.isLoggedIn])
    const [signupUsername, setSignupUsername] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    
    const signupHandle=e=>{
        e.preventDefault();
        props.handleSignupSubmit({
          username:signupUsername,
          password:signupPassword
        })
      }
  return (
    <div>
    <form onSubmit={signupHandle}>
      <h3>Signup</h3>
      <input name="username" placeholder = "Username" value={signupUsername} onChange={e=>setSignupUsername(e.target.value)}/>
      <input type="password" name="password" placeholder = "Password" value={signupPassword} onChange={e=>setSignupPassword(e.target.value)}/>
      <button>Signup!</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Have a Account? Login here.</button>
    </div>
  )
}
