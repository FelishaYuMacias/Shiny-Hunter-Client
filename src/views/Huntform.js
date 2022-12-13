import React, { useState, useEffect } from 'react';
import API from '../util/API'

const Huntform = (props) => {
  const [method, setMethod] = useState('');
  const [phase, setPhase] = useState('');
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState(0);

  const handleInputChange = (e) => {

    const { name, value } = e.target;


    return method === 'method' ? setMethod(value) : setPhase(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userId = JSON.parse(localStorage.getItem('user')).id
    const userToken = JSON.parse(localStorage.getItem('user')).token

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

      API.createHunt(hunt, userToken).then(res => {
        if (res.ok) {
          alert('woooooo')
        }
      })
    })
  };

  useEffect(() => {
    localStorage.setItem('myCount', count);
  });

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>
        Hello {props.userId}
      </h1>
      <h2>Enter Hunt Below</h2>
      <form className="form">
        <div className="nes-field">
          <input type="text" id="pokemonName" placeholder="Pokemon" className="nes-input" />
        </div>
        <div className="nes-select">
          <select required id="huntMethod">
            <option value="" disabled selected hidden>Select...</option>
            <option value="0">Random encounter</option>
            <option value="1">Soft Reset</option>
            <option value="2">Eggs</option>
            <option value="3">Trade</option>
            <option value="4">Masuda</option>
            <option value="5">Pokeradar</option>
            <option value="6">Chain fishing</option>
            <option value="7">Friend safari</option>
            <option value="8">Horde</option>
            <option value="9">Dexnav</option>
            <option value="10">S.O.S.</option>
            <option value="11">Wormhole</option>
          </select>
        </div>
        <input
          name="Count"
          placeholder={count}
        />

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
