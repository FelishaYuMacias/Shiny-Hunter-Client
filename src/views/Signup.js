import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../util/API'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


const Signup = (props) => {
  const [signupUsername, setSignupUsername] = useState("")
  const [signupPassword, setSignupPassword] = useState("")

  const handleInputChange = (e) => setSignupUsername(e.target.value)

  const isError = signupUsername === ""
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

      <FormControl isInvalid={isError}
      onSubmit={handleSignup}>
        <h3>Signup</h3>
        <input
          placeholder="Username"
          value={signupUsername}
          onChange={handleInputChange}
          />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={e => setSignupPassword(e.target.value)}/>
          {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
        <button type="button" class="nes-btn is-error">Signup!</button>
      </FormControl>
      <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Have a Account? Login here.</button>

    </div>
  )
}

export default Signup
