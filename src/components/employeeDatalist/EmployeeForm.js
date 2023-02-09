import React, { useState } from 'react';

export default function EmployeeForm(props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const changeSalary = (event) => {
    setSalary(event.target.value);
  }

  const changeEmail = (event) => {
    setEmail(event.target.value);
  }

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      city,
      salary,
      email,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName('');
    setCity('');
    setSalary('');
    setEmail('');
  };

  return (
    < >
      <form className="row g-3 mt-5">
        <div className="col-md-12">
          <h2>Add Employee Data</h2>
        </div>
        <div className="col-md-6">
          <label>Name</label>
          <input type="text" value={name} onChange={changeName} className="form-control" required/>
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input type="email" value={email} onChange={changeEmail} className="form-control" required/>
        </div>
        <div className="col-md-6">
          <label>City</label>
          <input type="text" value={city} onChange={changeCity} className="form-control" required/>
        </div>
        <div className="col-md-6">
          <label>Salary</label>
          <input type="text" value={salary} onChange={changeSalary} className="form-control" required/>
        </div>
        <div className="col-md-12">
          <button onClick={transferValue} className="btn btn-primary"> Submit</button>
        </div>

      </form>
    </>
  );
}
