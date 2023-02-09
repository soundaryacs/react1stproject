import React, { useState } from "react";

export default function ValidationForm() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");
  const [fNameErrorMsg, setfNameErrorMsg] = useState("");
  const [lNameErrorMsg, setlNameErrorMsg] = useState("");
  const [email, setEmail] = useState("xx@gmail.com");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [phone, setPhone] = useState("9686719590");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(fname + " " + lname + " " + email + " " + phone);
  };

  const changeHandler = (e) => {
    const inputField = e.target.name;
    if (inputField === "fname") {
      setFname(e.target.value);
      if (!e.target.value) {
        setfNameErrorMsg("firstname should not be empty");
      } else if (e.target.value.length < 5) {
        setfNameErrorMsg("firstname should have atleast 5 chars");
      } else {
        setfNameErrorMsg("");
      }
    } else if (inputField === "lname") {
      setLname(e.target.value);
      if (!e.target.value) {
        setlNameErrorMsg("lastname should not be empty");
      } else if (e.target.value.length < 5) {
        setlNameErrorMsg("lastname should have atleast 5 chars");
      } else {
        setlNameErrorMsg("");
      }
    } else if (inputField === "email"){
        setEmail(e.target.value);
        if(!e.target.value){
            setEmailErrorMsg("This field shouldn't empty");
        }else if (!e.target.value.match(isValidEmail)){
            setEmailErrorMsg("Enter valid Email!");
        }else{
            setEmailErrorMsg("");
        }
    }else if(inputField === "phone"){
        setPhone(e.target.value);
        if(!e.target.value){
            setPhoneErrorMsg("This field shouldn't empty");
        }else if (!(e.target.value.match('[0-9]{10}'))){
            setPhoneErrorMsg("Enter valid Phone Number!");
        }else{
            setPhoneErrorMsg("");
        }
    }else{

    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" value={fname} onChange={changeHandler} />
        <span className="text-danger">{fNameErrorMsg}</span> <br/>
        Last Name:
        <input name="lname" value={lname} onChange={changeHandler} />
        <span className="text-danger">{lNameErrorMsg}</span><br/>
        Email:
        <input name="email" value={email} onChange={changeHandler} />
        <span className="text-danger">{emailErrorMsg}</span>
        <br />
        Phone Number:
        <input name="phone" value={phone} onChange={changeHandler} />
        <span className="text-danger">{phoneErrorMsg}</span>
        <br /><br />
        <button>submit</button>
      </form>
    </>
  );
}