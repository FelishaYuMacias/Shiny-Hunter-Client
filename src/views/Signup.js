import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../util/API'

const Login = (props) => {
  const [loginUsername, setLoginUsername] = useState(null)
  const [loginPassword, setLoginPassword] = useState(null)
  const [signupUsername, setSignupUsername] = useState(null)
  const [signupPassword, setSignupPassword] = useState(null)

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

  const handleSignup = (e) => {
    e.preventDefault()

    const userObj = {
      username: loginUsername,
      password: loginPassword
    }

    API.signup(userObj).then(data => {
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
      <form onSubmit={handleSignup}>
        <h3>Signup</h3>
        <input
          placeholder="Username"
          value={signupUsername}
          onChange={e => setSignupUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={e => setSignupPassword(e.target.value)}
        />
        <button>Signup!</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Have a Account? Login here.</button>
      </form>

    </div>
  )
}

export default Login
