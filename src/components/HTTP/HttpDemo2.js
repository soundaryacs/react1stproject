import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function HttpDemo2() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async function () {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersJSON = await users.json();
    setUsers(usersJSON);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-center">Fetch Users</h1>
      <div className="container">
        <div className="row">
        <table  className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
        
          {users.map((user, ind) => {
            return (
              <tbody>
                <tr key={ind}>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                </tr>
              </tbody>
            );
          })}
          </table>
        </div>
      </div>
    </>
  );
}