import React, { useRef, useState } from 'react'

export default function FormDemo03() {
    //Uncontrolled Form
    const [fname, setFname] = useState("Soundarya");
    const [lname, setLname] = useState("CS");
  
    const ref1 = useRef();
    const ref2 = useRef();
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(fname + " " + lname);
      console.log(ref1.current.value + " " + ref2.current.value);
    };
  
    return (
      <>
        <form onSubmit={submitHandler}>
          First Name:
          <input name="fname" defaultValue={fname} ref={ref1} /><br/>
          Last Name:
          <input name="lname" defaultValue={lname} ref={ref2} />
          <br />
          <br />
          <button>submit</button>
        </form>
      </>
    );
  }