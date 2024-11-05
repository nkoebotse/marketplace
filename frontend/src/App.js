import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct usage of Routes in v6
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from '../src/components/store'; // Import your Redux store
import './App.css'; 

// Import all your components
import HomePage from './components/pages/HomePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CartPage from './components/Cart/CartPage';
import Checkout from './components/Cart/Checkout';
import AdminDashboard from './components/pages/AdminDashboard';
import VendorDashboard from './components/pages/VendorDashboard';
import ProductUpload from './components/pages/ProductUpload';

// Import ToastContainer from react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your app with Redux Provider */}
      <Router>
        <ToastContainer /> {/* Global Toast Container for notifications */}
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/upload" element={<ProductUpload />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
