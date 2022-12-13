import './UpdateHunt.css';
import React, { useEffect, useState } from 'react'
import API from '../util/API';
import axios from 'axios'
// const URL_PREFIX = 'http://localhost:3001'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

export default function UpdateHunt(props) {
    const huntId = localStorage.getItem('hunt')

    // const [method, setMethod] = useState('');
    // const handleMethod = event => {
    //     const method = event.target.value
    //     setMethod(method);
    //     console.log(`method is: ${method}`);
    // }

    const [method, setMethod] = useState(() => {
        const hunt = JSON.parse(localStorage.getItem('currentHunt'))
        if (hunt) {
          return hunt.method
        } else {
          return "Random encounter"
        }
      })

    const [count, setCount] = useState('');
    const handleCounter = event => {
        const count = event.target.value
        setCounter(counter);
        console.log(`counter is: ${count}`);
    }

    const updateHunt = (e) => {
        e.preventDefault();
        console.log("Submit clicked")
        console.log(`hunt id is ${huntId}`)
        console.log('new method is:', method);
        console.log(`new counter is: ${count}`);

        const user = JSON.parse(localStorage.getItem('user'))
        const userId = user.id
        const userToken = user.token

        const hunt = {
            method: document.querySelector('#huntMethod').value,
            phase: 1,
            userId: userId,
            pokemon: res.data.pokemon._id
          }

          API.editHunt(hunt, userToken)
          navigate('/profile')
          localStorage.removeItem('currentHunt')
    };
    useEffect(() => {
        const currentHunt = {
          method: method,
          count: count
        }
    
        localStorage.setItem('currentHunt', JSON.stringify(currentHunt));
      })

    return (
        <>
            <h1>Update Your Hunt</h1>
            <div className='update nes-container'>
            <div className="nes-select is-inline">
            <label htmlFor="method_field">Update Method</label>
          <select required id="huntMethod" value={method} onChange={setMethod}>
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
                <div className="nes-field is-inline  updatedCounter">
                    <label htmlFor="name_field">Updated Counter</label>
                    <input type="text" id="counter_field" className="nes-input" name="counter" onChange={handleCounter} value={counter} />
                </div>
                <div className="nes-field is-inline updatedPhase">
                    <label htmlFor="name_field">Updated Phase</label>
                    <input type="text" id="phase_field" className="nes-input" />
                </div>
                <div className="nes-field is-inline updatedGame">
                    <label htmlFor="name_field">Updated Game</label>
                    <input type="text" id="game_field" className="nes-input" />
                </div>
                <div className="nes-field is-inline updatedComplete">
                    <label htmlFor="name_field">Put Completion Date </label>
                    <input type="date" id="completed_field" className="nes-input" />
                </div>
                <div className="update-btn">
                    <button type="button" className="nes-btn is-warning" onClick={updateHunt}>Submit</button>
                </div>
            </div>
        </>
    )
} 