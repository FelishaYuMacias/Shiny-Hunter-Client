import React, {useState} from 'react'

export default function Login(props) {
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signupUsername, setSignupUsername] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    
    const loginHandle=e=>{
      e.preventDefault();
      props.handleLoginSubmit({
        username:loginUsername,
        password:loginPassword
      })
    }
    const signupHandle=e=>{
        e.preventDefault();
        props.handleSignupSubmit({
          username:loginUsername,
          password:loginPassword
        })
      }
   
  return (
    <div>
    <form onSubmit={loginHandle}>
      <h3>Login</h3>
      <input name="username"  placeholder = "username" value={loginUsername} onChange={e=>setLoginUsername(e.target.value)}/>
      <input type="password" name="password" placeholder = "Password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
      <button>Log in!</button>
    </form>
    <form onSubmit={signupHandle}>
      <h3>Signup</h3>
      <input name="username"  value={signupUsername} onChange={e=>setSignupUsername(e.target.value)}/>
      <input type="password" name="password" value={signupPassword} onChange={e=>setSignupPassword(e.target.value)}/>
      <button>Signup!</button>
    </form>
    
    </div>
  )
}