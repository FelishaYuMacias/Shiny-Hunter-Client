import './UpdateHunt.css';
import React, { useEffect, useState } from 'react'
import API from '../util/API';
import axios from 'axios'
// const URL_PREFIX = 'http://localhost:3001'
const URL_PREFIX = 'https://shiny-hunter-server.herokuapp.com'

export default function UpdateHunt(props) {
    const huntId = localStorage.getItem('hunt')

    const [method, setMethod] = useState('');
    const handleMethod = event => {
        const method = event.target.value
        setMethod(method);
        console.log(`method is: ${method}`);
    }

    const [counter, setCounter] = useState('');
    const handleCounter = event => {
        const counter = event.target.value
        setCounter(counter);
        console.log(`counter is: ${counter}`);
    }

    const updateHunt = (e) => {
        e.preventDefault();
        console.log("Submit clicked")
        console.log(`hunt id is ${huntId}`)
        console.log('new method is:', method);
        console.log(`new counter is: ${counter}`);
        setMethod("")
        setCounter("")
        // editThisHunt(huntId,updatedHunt)

    };
    // const editThisHunt = ()=>{
    //     let newMethod = "RE"
    //     console.log(newMethod)
    // document.getElementById('method_field').value = newMethod
    // console.log(newMethod)
    // ,
    // document.getElementById('counter_field').value = newCounter,
    // document.getElementById('phase_field').value = newPhase,
    // document.getElementById('game_field').value = newGame,
    // document.getElementById('completed_field').value = newDateCompleted
    //     const editHunt= async (updatedHunt, huntId, token) => {

    //         return await axios.put(`${URL_PREFIX}/api/hunts/${huntId}`
    //         , {
    //           updatedHunt,
    //           headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }
    //     )
    // }
    // editHunt()
    // console.log(editHunt)
    // }


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