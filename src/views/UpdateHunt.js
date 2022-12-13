import './UpdateHunt.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../util/API';
import axios from 'axios'
// const URL_PREFIX = 'http://localhost:3001'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

export default function UpdateHunt(props) {
    const navigate = useNavigate();
    const huntId = localStorage.getItem('hunt')

    const [method, setMethod] = useState('');
    const handleMethod = event => {
        const method = event.target.value
        setMethod(method);
        console.log(`method is: ${method}`);
    }

    const [count, setCount] = useState('');
    const handleCount = event => {
        const count = event.target.value
        setCount(count);
        console.log(`count is: ${count}`);
    }

    const [phase, setPhase] = useState('');
    const handlePhase = event => {
        const phase = event.target.value
        setPhase(phase);
        console.log(`phase is: ${phase}`);
    }

    const [game, setGame] = useState('');
    const handleGame = event => {
        const game = event.target.value
        setGame(game);
        console.log(`game is: ${game}`);
    }

    const [dateCompleted, setDateCompleted] = useState('');
    const handleDateCompleted = event => {
        const dateCompleted = event.target.value
        setDateCompleted(dateCompleted);
        console.log(`dateCompleted is: ${dateCompleted}`);
    }

    const updateHunt = (e) => {
        e.preventDefault();
        console.log("Submit clicked")
        console.log(`hunt id is ${huntId}`)
        console.log('new method is:', method);
        console.log(`new count is: ${count}`);
        console.log(`new phase is: ${phase}`);
        console.log(`new game is: ${game}`);
        console.log(`new dateCompleted is: ${dateCompleted}`);

        const user = JSON.parse(localStorage.getItem('user'))
        const userId = user.id
        const userToken = user.token

        const hunt = {
            method: method,
            counter: parseInt(count, 10),
            phase: phase,
            game: game,
            dateCompleted: dateCompleted
        }
console.log(hunt)
        API.editHunt(hunt, huntId, userToken)
        navigate('/profile')
        localStorage.removeItem('currentHunt')
    };
    useEffect(() => {
        const currentHunt = {
            method: method,
            counter: count,
            phase: phase,
            game: game,
            dateCompleted: dateCompleted
        }

        localStorage.setItem('currentHunt', JSON.stringify(currentHunt));
    })

    return (
        <>
            <h1>Update Your Hunt</h1>
            <div className='update nes-container'>
                <div className="nes-field is-inline updatedMethod">
                    <label htmlFor="name_field">Updated Method</label>
                    <input type="text" id="method_field" className="nes-input" name="method" onChange={handleMethod} value={method} />
                </div>
                <div className="nes-field is-inline  updatedCounter">
                    <label htmlFor="name_field">Updated Counter</label>
                    <input type="text" id="counter_field" className="nes-input" name="counter" onChange={handleCount} value={count} />
                </div>
                <div className="nes-field is-inline  updatedPhase">
                    <label htmlFor="phase_field">Updated Phase</label>
                    <input type="text" id="phase_field" className="nes-input" name="phase" onChange={handlePhase} value={phase} />
                </div>
                <div className="nes-field  is-inline  updatedGame">
                    <label htmlFor="name_field">Updated Game</label>
                    <input type="text" id="game_field" className="nes-input" name="game" onChange={handleGame} value={game} />
                </div>
                <div className="nes-field  is-inline  updatedComplete">
                    <label htmlFor="name_field">Put Completion Date </label>
                    <input type="date" id="completed_field" className="nes-input" name="dateCompleted" onChange={handleDateCompleted} value={dateCompleted} />
                </div>
                <div className="update-btn">
                    <button type="button" className="nes-btn is-warning" onClick={updateHunt}>Submit</button>
                </div>
            </div>
        </>
    )
} 