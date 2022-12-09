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
    <div className='card'>
      <div className='li'>
    <img src={sprite} alt="shiny"
     />
   </div>
  </div>
  )
}

export default Card