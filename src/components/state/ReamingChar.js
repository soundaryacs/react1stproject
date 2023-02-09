import React, { useState } from 'react'

export default function ReamingChar() {
    // const [msg, setMeg] = useState("");
    const [remaining, setRemaining] = useState(100);
    const keyUpHandler = (e) => {
        const msg = e.target.value;
        setRemaining(100-msg.length);
    }
  return (
    <div>
      <textarea onKeyUp={keyUpHandler} maxLength={100}></textarea>
      {/* <p>Message is : {msg}</p> */}
      <p>Remaining Char: {remaining}</p>
    </div>
  );
}
