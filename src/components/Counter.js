import React, { useState, useEffect } from 'react';

function Count() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  });

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Add your hunts!
      </div>
      <div className="card-body">
        <p className="card-text">
          Current Hunts: {count}
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={increaseCount}
        >
          +
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={decreaseCount}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Count;