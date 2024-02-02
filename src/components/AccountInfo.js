import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from storage (e.g., database, localStorage)
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleDelete = (index) => {
    // Remove the user at the specified index from the list
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);

    // Save the updated users array to storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Update the state to reflect the changes
    setUsers(updatedUsers);
  };

  return (
    <div className="container mt-5">
      <h2>Details </h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/registration?edit=true&index=${index}`}>
                  <button className="btn btn-primary me-2">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountInfo;
