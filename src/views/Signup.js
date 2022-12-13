import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../util/API'

const Login = (props) => {
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

  const handleSignup = (e) => {
    e.preventDefault()

    if (storedUser) {
      history.push('/')
    }

    const userObj = {
      username: signupUsername,
      password: signupPassword
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
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Have a Account? Login here.</button>

    </div>
  )
}

export default Login
