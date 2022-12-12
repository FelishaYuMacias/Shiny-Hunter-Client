import { useEffect, useState } from 'react'
import API from '../util/API'
import Card from '../components/Card'
// import dateFormat, { dateStarted } from "dateformat";
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");


const Hunts = () => {

  const [hunt, setHunt] = useState(null)

  useEffect(() => {
    API.getHunts().then(res => {
      setHunt(res)
    })
  }, [])

  if (!hunt) return null

  return (
    <>
      {hunt.map((data) => {
        console.log(hunt)
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

export default Hunts