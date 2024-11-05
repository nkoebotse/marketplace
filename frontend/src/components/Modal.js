// src/components/Modal.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Modal = ({ showModal, handleClose, itemName }) => {
  const navigate = useNavigate();  // Hook to navigate to other routes

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to the cart page
    handleClose(); // Close the modal after navigation
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
            <h2 className="text-xl font-semibold mb-4">Item Added to Cart</h2>
            <p className="text-lg mb-4">The item "{itemName}" has been added to your cart!</p>
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg mr-2 hover:bg-blue-700"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleGoToCart}  // Use the new handleGoToCart function
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
