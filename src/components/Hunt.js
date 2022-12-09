import React, { useState } from 'react';
import Huntform from './Huntform';
import Hunt from './Hunt';

function Hunts() {
  const [hunts, setHunts] = useState([]);

  const addHuntsItem = (item) => {
    console.log(
      item
    );

    if (!item.text) {
      return;
    }

    const newHunts = [item, ...hunts];
    console.log(newHunts);

    setHunts(newHunts);
  };

  const completeHuntsItem = (id) => {
   
    let updatedHunts = hunts.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedHunts);
    setHunts(updatedHunts);
  };

  const removeHuntsItem = (id) => {
    const updatedHunts = [...hunts].filter((item) => item.id !== id);

    setHunts(updatedHunts);
  };

  const editHuntsItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setHunts((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>Please Add Your Hunt Here!</h1>
      <Huntform onSubmit={addHuntsItem} />
      <Hunts
        hunts={hunts}
        completeHuntsItem={completeHuntsItem}
        removeHuntsItem={removeHuntsItem}
        editHuntsItem={editHuntsItem}
      ></Hunts>
    </div>
  );
}

export default Hunts;
