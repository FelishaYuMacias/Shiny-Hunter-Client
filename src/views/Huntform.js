import React, { useState, useEffect } from 'react';

function Huntform(props) {

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
  
  
      alert(`Hunt added ${props.username}`);
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
          Hello {props.username}
        </h1>
        <h2>Enter Hunt Below</h2>
        <form className="form">
          <input
            name="Method"
            onChange={handleInputChange}
            type="text"
            placeholder="Method"
          />
          <input
            name="phase"
            onChange={handleInputChange}
            type="text"
            placeholder="Phase"
          />
           <input
            name="pokemon"
            onChange={handleInputChange}
            type="text"
            placeholder="Pokemon"
            />
            <input
            name="Count"
            placeholder={count}
            />
             
      <button type="button" class="nes-btn is-primary" onClick={handleDecrease}>
        -
      </button><button type="button" class="nes-btn is-primary" onClick={handleIncrease}>
        +
      </button>
      <br>
      </br>
          <button type="button" class="nes-btn is-primary" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default Huntform;
  