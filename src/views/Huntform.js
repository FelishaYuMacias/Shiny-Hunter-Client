import React, { useState, useEffect } from 'react';

function Huntform(props) {

    // Here we set two state variables for firstName and lastName using `useState`
    const [method, setMethod] = useState('');
    const [phase, setPhase] = useState('');
    const [count, setCount] = useState(0);
    const [pokemon, setPokemon] = useState(0);
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return method === 'method' ? setMethod(value) : setPhase(value); 
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their first and last name, clear the inputs
      alert(`Hello ${props.username}`);
      setMethod('');
      setPhase('');
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
        <form className="form">
          <input
            value={method}
            name="Method"
            onChange={handleInputChange}
            type="text"
            placeholder="Method"
          />
          <input
            value={phase}
            name="phase"
            onChange={handleInputChange}
            type="text"
            placeholder="Phase"
          />
           <input
            value={pokemon}
            name="phase"
            onChange={handleInputChange}
            type="text"
            placeholder="Phase"
            />
      <button type="button" onClick={handleDecrease}>
        -
      </button><button type="button" onClick={handleIncrease}>
        +
      </button>
      <p> {count} </p> 
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default Huntform;
  