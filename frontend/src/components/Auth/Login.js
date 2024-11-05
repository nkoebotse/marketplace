// src/components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // Store the token and role in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);  // Store role

      // Redirect or update UI based on role (optional)
      alert('Login successful!');

      // You can also redirect the user based on their role (e.g., to a dashboard or admin page)
      if (response.data.role === 'Admin') {
        window.location.href = '/admin-dashboard';  // Example: redirect to admin page
      } else {
        window.location.href = '/home';  // Redirect to home or user dashboard
      }
    } catch (error) {
      console.error(error);
      alert('Login failed, please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <a href="/register" className="text-blue-500">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
