// ComponentA.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function ComponentA() {
  const history = useHistory();

  const handleClick = () => {
    // Navigate to ComponentB
    history.push('/componentb');
  };

  return (
    <div>
      <h1>Component A</h1>
      <button onClick={handleClick}>Go to Component B</button>
    </div>
  );
}

export default ComponentA;
