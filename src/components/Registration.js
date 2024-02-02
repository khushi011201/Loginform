import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Registration = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Fetch user data from storage (e.g., database, localStorage)
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    // Fetch the edit index from query parameters
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get('index');
    setEditIndex(index);
  }, [location.search]);

  useEffect(() => {
    // If in edit mode, pre-fill the form with the user data
    if (editIndex !== null && users[editIndex]) {
      setUserData(users[editIndex]);
    }
  }, [editIndex, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the users array with the new or edited user data
    const updatedUsers = [...users];
    if (editIndex !== null) {
      updatedUsers[editIndex] = userData;
    } else {
      updatedUsers.push(userData);
    }

    // Save the updated users array to storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Redirect to AccountInfo page after successful registration or edit
    navigate('/account');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">{editIndex !== null ? 'Edit' : 'Registration'} </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {editIndex !== null ? 'Save Changes' : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
