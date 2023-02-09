import React, { Component } from 'react'

export default class StateDemo2 extends Component {
   
        counter: 0;
      
  render() {
    return (
      <div>
         <div>StateDemo1 </div>
        <div>Counter Value: {counter}</div>
        {/* <button onClick={increment}>Increment</button> */}
      </div>
    )
  }
}
