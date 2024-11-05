import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

const ProductDetail = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Product Name",
      price: 'R20',
      // Include other product details as needed
    };
    dispatch(addToCart(product)); // Dispatch the action to add to cart
    toast.success(`${product.name} has been added to your cart!`); // Show success notification
    console.log("Product added to cart");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Product Name</h2>
        <p className="text-gray-500">Product description goes here.</p>
        <p className="text-xl font-bold mt-2">R20</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
