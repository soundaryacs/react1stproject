import React, { useState } from 'react'

export default function FormDemo01() {
    // Controlled Form
    const [fName, setFname] = useState();
    const [lName, setLname] = useState();
    const chnageHandler1 = (e) => {
        setFname(e.target.value);
    }
    const chnageHandler2 = (e) => {
        setLname(e.target.value);
    }

    /* const chnageHandler = (e) =>{
        if(e.target.value === "fName"){
            setFname(e.target.value);
        }else{
            setLname(e.target.value);
        }
    } */
    const submitMyForm = (e) => {
        e.preventDefault(); // It prevent the page reloaded 
        console.log(fName, lName)
        
    }
    return <>
        <h2>Form Demo 1</h2>
        <form onSubmit={submitMyForm}>
            <p>First Name <input onChange={chnageHandler1} /></p>
            <p>Last Name <input onChange={chnageHandler2} /></p>
            <button>Submit</button> 
           {/* <input type="reset" className="ms-1"/> */}
           <p>First name: {fName} <br/>
           and Last name: {lName}</p>
        </form>

    </>
}
