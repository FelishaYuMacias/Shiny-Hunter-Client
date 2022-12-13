import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../util/API'

const Login = (props) => {
  const [loginUsername, setLoginUsername] = useState(null)
  const [loginPassword, setLoginPassword] = useState(null)


  const navigate = useNavigate();
  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/profile")
    }
  }, [props.isLoggedIn])

  let history = useNavigate();

  const storedUser = localStorage.getItem('user')

  const handleLogin = (e) => {
    e.preventDefault();

    if (storedUser) {
      history.push('/')
    }

    const userObj = {
      username: loginUsername,
      password: loginPassword
    }

    API.login(userObj).then(data => {
      if (data.token) {
        const user = {
          id: data.user._id,
          token: data.token,
          username: data.user.username
        }

        localStorage.setItem('user', JSON.stringify(user))
        navigate('/profile')
        window.location.reload()
      }
    })

  }

  return (
    <div>
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <input
        placeholder="Username"
        value={loginUsername}
        onChange={e => setLoginUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={e => setLoginPassword(e.target.value)}
      />
      <button>Log in!</button>
      <button className="link-btn" onClick={() => props.onFormSwitch('Signup')}>Need an account? Register here.</button>
    </form>
    </div>
  )
}

export default Login