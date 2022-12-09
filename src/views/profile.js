import React,{useEffect} from 'react'
import MyHunts from '../components/Myhunts'
import Hunts from './Hunts'
import API from "../util/API"
import { useNavigate } from "react-router-dom"

export default function Profile(props,data) {
  const navigate = useNavigate();
  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    if(storedToken){
      // console.log(storedToken)
      API.getUserFromToken(storedToken).then(data=>{
        // console.log(data)
        console.log(props)
        console.log(`user id is ${props.userId}`)
        console.log(`user token is ${props.token}`)
        if(data.user){
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
      },[])


  
  return (
    <>
    {
        props.isLoggedIn?(
        <div className="Profile">
        <h1>Welcome {props.username}!</h1>
        {/* <MyHunts userId={props.id} token={props.token}/> */}
        {/* <Hunts userId={props.userId} token={props.token}/> */}
        {/* <p>{props.setUserId.userId}</p> */}
        </div>
        ):(
            <h1>Loading....</h1>
        )
    }
    </>
  )
}
