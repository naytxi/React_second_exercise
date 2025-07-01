import React, { useState } from 'react';

const Counter = ({ start = 0, step = 1 }) => {
  const [count, setCount] = useState(start);

  return (
    <div>
      <button onClick={() => setCount(count - step)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
};

export default Counter;
