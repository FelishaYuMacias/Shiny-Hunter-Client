import React, { useState } from "react";

function Huntform(props) {
    const [input, setInput] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.random(Math.floor() * 1000),
        text: input
      });
  
      setInput('');
    };
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    return !props.edit ? (
      <div>
        <form className="hunt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add to your hunts."
            value={input}
            name="text"
            className="hunt-input"
            onChange={handleChange}
          ></input>
          <button className="hunts-button">Add hunt</button>
        </form>
      </div>
    ) : (
      <div>
        <h3>Update entry: {props.edit.value}</h3>
        <form className="hunt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={props.edit.value}
            value={input}
            name="text"
            className="hunt-input"
            onChange={handleChange}
          ></input>
          <button className="hunt-button">Update</button>
        </form>
      </div>
    );
  }

  export default Huntform;