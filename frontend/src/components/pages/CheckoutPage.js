// src/components/Cart/Checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="border border-gray-300 rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Address</label>
          <input type="text" className="border border-gray-300 rounded w-full py-2 px-3" required />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
