import React, { useState } from 'react';

function Counter() {
  // Define the state using the useState hook
  const [count, setCount] = useState(0);

  // Function to handle the increment and decrement buttons
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>React Hooks Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;