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
          return <Card pokemon={data.pokemon.species} />
        }
      })}
    </>
  )
}

export default Hunts