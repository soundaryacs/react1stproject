import React from 'react';
import { useState } from 'react'

export default function StateDemo1() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(count => count + 1);
      };
    const decrement = () =>{
        setCounter(count => count -1);
    }
    const reset = () =>{
        setCounter(0);
    }
    return (
      <>
        <div>StateDemo1 </div>
        <div>Counter Value: {counter}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
      </>
  )
}
