import React,{useEffect} from 'react'
import Hunts from './Hunts'
import API from "../util/API"
import Huntform from "../components/Huntform";

export default function Profile(props) {
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
                
            }
          })
        } else {
          console.log('no stored token')
         
        }
      },[props])
  return (
    <>
    {
        props.isLoggedIn?(
        <div className="Profile">
        <h1>Welcome {props.username}!</h1>
        <Hunts userId={props.id} token={props.token}/>
        <Huntform/>
        </div>
        ):(
            <h1>Loading....</h1>
        )
    }
    </>
  )
}