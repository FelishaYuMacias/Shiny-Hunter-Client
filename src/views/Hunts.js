import { useEffect, useState } from 'react'
import API from '../util/API'
import Card from '../components/Card'


const Hunts = () => {

  const [hunt, setHunt] = useState(null)
  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem('myCount', count);
  });

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
    

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
      <div>
      <h1>ID</h1>
      <form className="hunt-form">
      <input>
          
          </input>
      </form>
      <h1>Method</h1>
      <input></input>
      <h1>Count</h1>
      <p> {count} </p> 
      <button type="button" onClick={handleDecrease}>
        -
      </button><button type="button" onClick={handleIncrease}>
        +
      </button>
      <h1>Date Started</h1>
      <input></input>
      <h1>Date Completed</h1>
      <input></input>
      <h1>Phase</h1>
      <input></input>
      <h1>Game</h1>
      <input></input>
      <h1>Pokemon</h1>
      <input></input>
      <h1>Trainer</h1>
      <input></input>
    </div>
    </>
    
  )
}

export default Hunts