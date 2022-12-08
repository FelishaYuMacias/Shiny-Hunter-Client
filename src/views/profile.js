import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import API from "../util/API"

export default function Profile(props) {
  const navigate = useNavigate();
  // useEffect(()=>{
  //     if(!props.isLoggedIn){
  //         navigate("/login")
  //     }
  // },[])
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
  }, [])
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