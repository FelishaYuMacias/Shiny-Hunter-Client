import { useEffect, useState } from 'react'
import API from '../util/API'
import Card from '../components/Card'


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
        if (data.pokemon) {
          return (
      <div className='row'>   
        <div className='column'>
          <div class="nes-container is-rounded">
            <div className='card'>
            <div class="nes-container is-rounded">
            <h3>{data.pokemon.species}
            <Card pokemon={data.pokemon.species} />
            </h3>
          </div>
        </div>
        <div className='text'>
          <h4>Method</h4>
          <p>{data.method}</p>
          <h4>Date Started</h4>
          <p>{data.dateStarted}</p>
          <h4>Count</h4>
          <p>{data.counter}</p>
          <h4>Form</h4>
          <p>{data.pokemon.form}</p>
          <h4>Level</h4>
          <p>{data.pokemon.level}</p>
          <h4>Gender</h4>
          <p>{data.pokemon.gender}</p>
          </div>
        </div>
      </div>
    </div>
       ) 
      } 
      })}
    </>
    
  )
}

export default Hunts