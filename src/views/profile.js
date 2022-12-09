import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import API from "../util/API"
import Hunts from "../components/Hunt"

 function Profile(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data => {
        if (data.user) {
          console.log(data)
          props.setToken(storedToken)
          props.setIsLoggedIn(true)
          props.setUserId(data.user.id)
        } else {
          navigate("/login")
        }
      })
    } else {
      console.log('no stored token')
      navigate("/login")
    }
  }, [props, navigate]);
  

  return (
    <>
      {
        props.isLoggedIn ? (
          <div className="Profile">
            <h1>Welcome {props.username}!</h1>
          </div>
        ) : (
          <h1>Loading....</h1>
        )
      }
    </>
  )
}
export default Profile