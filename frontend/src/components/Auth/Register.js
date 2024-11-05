// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Client'); // Default role set to 'Client'

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send the registration data (including role) to the backend
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
        role,
      });

      alert('Registration successful! You can now log in.');
      window.location.href = '/login'; // Redirect to login page after registration
    } catch (error) {
      console.error(error);
      alert('Registration failed, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
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
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          >
            <option value="Client">Client</option>
            <option value="Vendor">Vendor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Register
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-500">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
