import { useEffect, useState } from 'react'
import PokeAPI from '../util/PokeAPI'

const Card = ({ hunt }) => {

  const [sprite, setSprite] = useState(null)

  useEffect(() => {
    PokeAPI.getSprite(hunt.pokemon.species).then(res => {
      setSprite(res)
    })
  }, [hunt.pokemon.species])

  return (
    <div className="card">
      <div className='image'>
        <img src={sprite} alt="shiny" />
      </div>
      <div className='text'>
        <h4>Method</h4>
        <p>{hunt.method}</p>
        <h4>Date Started</h4>
        <p>{hunt.dateStarted}</p>
        <h4>Count</h4>
        <p>{hunt.counter}</p>
        <h4>Form</h4>
        <p>{hunt.pokemon.form}</p>
        <h4>Level</h4>
        <p>{hunt.pokemon.level}</p>
        <h4>Gender</h4>
        <p>{hunt.pokemon.gender}</p>
      </div>
    </div>
  )
}

export default Card