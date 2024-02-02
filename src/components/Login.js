import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch registered users from storage (e.g., database, localStorage)
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Check if the entered credentials match any registered user
    const authenticatedUser = users.find(
      (user) => user.username === loginData.username && user.password === loginData.password
    );

    if (authenticatedUser) {
      // Redirect to AccountInfo page after successful login
      navigate('/account');
    } else {
      // Display an error message or handle unsuccessful login
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-5">
        <h2 className="text-center mb-5">SignUp </h2>
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
              value={loginData.username}
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
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
