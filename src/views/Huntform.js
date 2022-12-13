import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import API from '../util/API'

const Huntform = (props) => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(() => {
    const hunt = JSON.parse(localStorage.getItem('currentHunt'))
    if (hunt) {
      return hunt.pokemon
    } else {
      return null
    }
  })
  const [method, setMethod] = useState(() => {
    const hunt = JSON.parse(localStorage.getItem('currentHunt'))
    if (hunt) {
      return hunt.method
    } else {
      return "Random encounter"
    }
  })
  const [count, setCount] = useState(() => {
    const hunt = JSON.parse(localStorage.getItem('currentHunt'))
    if (hunt) {
      return hunt.count
    } else {
      return 0
    }
  })

  const handlePokemon = () => {
    setPokemon(document.querySelector('#pokemonName').value)
  }

  const handleMethod = () => {
    setMethod(document.querySelector('#huntMethod').value)
  }

  const handleIncrease = () => {
    setCount((count) => count + 1);
  }
  const handleDecrease = () => {
    setCount((count) => count - 1);
  }

  const handleChange = () => {
    setCount(count)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.id
    const userToken = user.token

    const pokemon = {
      species: document.querySelector('#pokemonName').value,
      level: 1,
      form: 'base',
      gender: 'male'
    }

    API.createPokemon(pokemon, userToken).then(res => {
      const hunt = {
        method: document.querySelector('#huntMethod').value,
        phase: 1,
        userId: userId,
        pokemon: res.data.pokemon._id
      }

      console.log(hunt)

      API.createHunt(hunt, userToken)
      navigate('/profile')
      localStorage.removeItem('currentHunt')
    })
  }

  useEffect(() => {
    const currentHunt = {
      pokemon: pokemon,
      method: method,
      count: count
    }

    localStorage.setItem('currentHunt', JSON.stringify(currentHunt));
  })

  return (
    <div>
      <h1>
        Hello {props.userId}
      </h1>
      <h2>Enter Hunt Below</h2>
      <form className="form">
        <div className="nes-field">
          <input type="text" className="nes-input" id="pokemonName" placeholder="Pokemon" value={pokemon} onChange={handlePokemon} />
        </div>
        <div className="nes-select">
          <select required id="huntMethod" value={method} onChange={handleMethod}>
            <option value="Random encounter">Random encounter</option>
            <option value="Soft Reset">Soft Reset</option>
            <option value="Eggs">Eggs</option>
            <option value="Trade">Trade</option>
            <option value="Masuda">Masuda</option>
            <option value="Pokeradar">Pokeradar</option>
            <option value="Chain fishing">Chain fishing</option>
            <option value="Friend safari">Friend safari</option>
            <option value="Horde">Horde</option>
            <option value="Dexnav">Dexnav</option>
            <option value="S.O.S.">S.O.S.</option>
            <option value="Wormhole">Wormhole</option>
          </select>
        </div>
        <div className="nes-field">
          <input type="number" className="nes-input" value={count} onChange={handleChange} />
        </div>
        <button type="button" className="nes-btn is-primary" onClick={handleDecrease}>
          -
        </button>
        <button type="button" className="nes-btn is-primary" onClick={handleIncrease}>
          +
        </button>
        <br />
        <button type="button" className="nes-btn is-primary" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Huntform;
