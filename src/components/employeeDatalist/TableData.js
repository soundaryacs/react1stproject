import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import jsonData from './data.json';
  
export default function TableData() {
  const [employeeData, setEmployeeData] = useState(jsonData);
  const handleDelete = (index,e) => {
    setEmployeeData(employeeData.filter((v, i) => i !== index));
}


  
  const tableRows = employeeData.map((info,index) => {
    return (
      <tr key={index}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.city}</td>
        <td>{info.salary}</td>
        <td><button onClick={e => handleDelete(index,e)}>Delete</button></td>
        <td><button>View</button></td>
        <td><button>Edit</button></td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalEmployees = employeeData.length;
    data.id = totalEmployees + 1;
    const updatedEmployeeData = [...employeeData];
    updatedEmployeeData.push(data);
    setEmployeeData(updatedEmployeeData);
  };
  
  return (
    <div className='m-5'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <EmployeeForm func={addRows} />
    </div>
  );
}
