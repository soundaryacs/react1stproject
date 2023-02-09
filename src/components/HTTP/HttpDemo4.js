import React, { useEffect, useState } from 'react'

export default function HttpDemo4() {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async function () {
        const employees = await fetch("http://localhost:4000/employees")
        const employeesJSON = await employees.json();
        setEmployees(employeesJSON);
    }

    useEffect(() => {
        fetchEmployees();
    }, [])
    return (
        <>
            <h1>Fetch employees list</h1>
            <div className='container'>

                <div className='row'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {employees.map((employee, ind) => {
                            return (
                                <tbody key={ind}>
                                    <tr>
                                        <th>{employee.id}</th>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>{employee.email}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>

            </div>
        </>
    )
}
