import React, { useState } from 'react';
import validator from 'validator'

export default function ValidateEmail() {
const [emailError, setEmailError] = useState ('')
const validateEmail = (e) => {
  var email = e.target.value

  if (validator.isEmail(email)) {
    setEmailError('Valid Email :)')
  } else {
    setEmailError('Enter valid Email!')
  }
}

return (
  <div style={{
    margin: 'auto',
    marginLeft: '300px',
  }}>
    <pre>
      <h2>Validating Email in ReactJS</h2>
      <span>Enter Email: </span><input type="text" id="userEmail" 
      onChange={(e) => validateEmail(e)}></input> <br />
      <span style={{
        fontWeight: 'bold',
        color: 'red',
      }}>{emailError}</span>
    </pre>
  </div>
);
}
