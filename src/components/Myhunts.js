import { useEffect, useState } from 'react'
import API from '../util/API'
import Card from '../components/Card'
import App from '../views/App'



const Myhunts = (props) => {
  const [myhunt, setMyhunt] = useState([])
  useEffect(()=>{
  const storedToken = localStorage.getItem("token")
  if(storedToken){
    // console.log(storedToken)
    API.getUserFromToken(storedToken).then(data=>{
      console.log(data)
      console.log(props)
      console.log(`user id is ${props.userId}`)
      console.log(`user token is ${props.token}`)
      if(data.user){
            props.setToken(storedToken)
            props.setIsLoggedIn(true)
            props.setUserId(data.user.id)
            props.setMyhunt(data.hunts).json()

          } else {
              navigate("/login")
          }
        })
      } else {
        console.log('no stored token')
        navigate("/login")
      }
    },[])


  // useEffect(() => {
  //   API.getHunts().then(res => {
  //     setHunt(res)
  //   })
  // }, [])

  if (!myhunt) return null

  return (
    <>
      {myhunt.map((data) => {
        console.log(myhunt)
        if (data.pokemon) {
          return (

            <div className='card'>
          <div>
            <h1>{data.pokemon.species}</h1>
            <Card pokemon={data.pokemon.species} />
          <p>{data.method}</p>
          <p>{data.dateStarted}</p>
          <p>{data.counter}</p>
          <p>{data.pokemon.form}</p>
          <p>{data.pokemon.level}</p>
          <p>{data.pokemon.gender}</p>
          </div>
        </div>
       ) 
      } 
      })}
    </>
    
  )
}

export default Myhunts