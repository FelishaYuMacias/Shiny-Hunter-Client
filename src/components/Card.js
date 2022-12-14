import { useEffect, useState } from 'react'
import PokeAPI from '../util/PokeAPI'
import * as moment from 'moment'

const Card = ({ hunt }) => {

  const [sprite, setSprite] = useState(null)
  const [completed, setCompleted] = useState(null)
  const [started, setStarted]= useState(null)

  // const current = new Date();
  // const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  const checkCompleted = ()=> {
    // console.log (hunt)
 if (hunt.dateCompleted) {
  // console.log(hunt.dateCompleted)
  const completed = moment.utc(hunt.dateCompleted).format('MM-DD-YYYY')
  setCompleted(completed)
 } else {
   setCompleted("To Be Determined")
 }
  }

  const formatStartDate = () =>{
const started = moment.utc(hunt.dateStarted).format('MM-DD-YYYY')
setStarted(started)
  }

  useEffect(() => {
    PokeAPI.getSprite(hunt.pokemon.species).then(res => {
      setSprite(res)
    })
    checkCompleted()
    formatStartDate()
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
        <p>{started}</p>
        <h4>Encounters</h4>
        <p>{hunt.counter}</p>
        <h4>Species</h4>
        <p>{hunt.pokemon.species}</p>
        <h4>Level</h4>
        <p>{hunt.pokemon.level}</p>
        <h4>Gender</h4>
        <p>{hunt.pokemon.gender}</p>
        <div>
        <h4>Date Completed</h4>
        <p>{completed}</p>
        </div>
      </div>
    </div>
  )
}

export default Card