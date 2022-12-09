import { useEffect, useState } from 'react'
import API from '../util/API'
import Card from '../components/Card'



const Myhunts = (props) => {
  const [myhunt, setMyhunt] = useState(null)

  useEffect(() => {
    API.getUserHunts().then(res => {
      setMyhunt(res)
    })
  }, [])

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