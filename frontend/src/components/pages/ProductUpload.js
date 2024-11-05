// src/pages/ProductUpload.js
import React from 'react';

const ProductUpload = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Upload Product</h1>
      <form className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input type="text" className="border border-gray-300 rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input type="text" className="border border-gray-300 rounded w-full py-2 px-3" required />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
