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
    <img src={sprite} alt="shiny" />
  )
}

export default Card