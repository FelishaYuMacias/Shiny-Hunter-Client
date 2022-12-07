import React, {useState} from 'react'

export default function Login(props) {
    const [LoginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const loginHandle=e=>{
      e.preventDefault();
      props.handleLoginSubmit({
        username:LoginUsername,
        password:loginPassword
      })
    }
   
  return (
    <div>
    <form onSubmit={loginHandle}>
      <h3>Login</h3>
      <input name="email"  placeholder = "username" value={LoginUsername} onChange={e=>setLoginUsername(e.target.value)}/>
      <input type="password" name="password" placeholder = "Password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
      <button>Log in!</button>
    </form>
    </div>
  )
}