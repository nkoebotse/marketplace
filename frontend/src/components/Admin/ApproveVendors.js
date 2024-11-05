// src/components/Admin/ApproveProducts.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, approveProduct, rejectProduct } from '../../store/actions/productActions'; // Assuming actions

const ApproveProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Assuming you have a products state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts())
      .finally(() => setLoading(false)); // Fetch products from the store
  }, [dispatch]);

  const handleApprove = (productId) => {
    dispatch(approveProduct(productId)); // Dispatch approve action
  };

  const handleReject = (productId) => {
    dispatch(rejectProduct(productId)); // Dispatch reject action
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Approve Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="font-bold">{product.price}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleApprove(product.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApproveProducts;
