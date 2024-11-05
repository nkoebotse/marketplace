import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

  const handleCloseEmptyCartModal = () => {
    setShowEmptyCartModal(false); // Close the modal
  };

  const handleShowEmptyCartModal = () => {
    setShowEmptyCartModal(true); // Show the modal when cart is empty
  };

  if (cartItems.length === 0) {
    handleShowEmptyCartModal(); // Show the empty cart modal when cart is empty
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      
      {/* Cart Empty Modal */}
      {showEmptyCartModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
            <h2 className="text-xl font-semibold mb-4">Your Cart is Empty</h2>
            <p className="text-lg mb-4">Looks like you haven't added anything to your cart yet.</p>
            <div className="flex justify-end">
              <Link to="/" className="bg-blue-600 text-white py-2 px-6 rounded-lg mr-2 hover:bg-blue-700">
                Continue Shopping
              </Link>
              <button
                onClick={handleCloseEmptyCartModal}
                className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
