import React,{useEffect} from 'react'
import Hunts from './Hunts'
import API from "../util/API"
import { useNavigate } from "react-router-dom"

export default function Profile(props) {
  const navigate = useNavigate();
    useEffect(()=>{
        const storedToken = localStorage.getItem("token")
        if(storedToken){
          console.log(storedToken)
          API.getUserFromToken(storedToken).then(data=>{
            if(data.user){
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
      },[])
  return (
    <>
    {
        props.isLoggedIn?(
        <div className="Profile">
        <h1>Welcome {props.username}!</h1>
        <Hunts user_Id={props.id} token={props.token}/>
        </div>
        ):(
            <h1>Loading</h1>
        )
    }
    </>
  )
}
