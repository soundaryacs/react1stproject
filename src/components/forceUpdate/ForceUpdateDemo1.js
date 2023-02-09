import React from 'react'

export default function ForceUpdateDemo1() {
    let counter = 0;
    function increment() {
        counter++;
        console.log(counter);
      }
  return (
    <div>
      <>
      <div>ForceUpdateDemo1 Demo1</div>
      <div>Counter Value: {counter}</div>
      <button onClick={increment}>Increment</button>
    </>
    </div>
  )
}
