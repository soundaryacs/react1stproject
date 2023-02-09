
import React, {useState} from 'react'

export default function HidePassword() {
   const[flag, setFlag] = useState (true);
  return (
    <>
      <h1>Toggle Password</h1>
      <input type={flag ? "password" : "text"}  className="m-1"/>
      <input type="checkbox" onChange={() => setFlag(!flag)}  className="m-1"/>
      {flag ? "show" : "Hide"} Password
      {/* <button onClick={() => setFlag(!flag)}>
        {flag ? "show" : "Hide"} Password
      </button> */}
    </>
  )
}
