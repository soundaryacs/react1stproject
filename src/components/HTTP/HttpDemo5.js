import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HttpDemo5() {
  const [users, setUsers] = useState([]);

  /* const fetchUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(response=>{
        console.log(response.data);
        setUsers([...response.data]);
    }).catch(err=>{
        console.log(err)
    })
  }; */
  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2 className="text-center">Employees List using AXIOS</h2>
      <table  className="table table-dark table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        {users.map((user, ind) => {
          return <tbody key={ind}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          </tbody>
        })}
      </table>
    </>
  );
}
