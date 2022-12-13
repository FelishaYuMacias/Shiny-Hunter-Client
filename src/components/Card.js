import { useEffect, useState } from 'react'
import PokeAPI from '../util/PokeAPI'

const Card = (props) => {

  const [sprite, setSprite] = useState(null)

  useEffect(() => {
    PokeAPI.getSprite(props.pokemon).then(res => {
      setSprite(res)
    })
  }, [])

  return (
    <div className='image'>
      <img src={sprite} alt="shiny" />
    </div>
  )
}

export default Card