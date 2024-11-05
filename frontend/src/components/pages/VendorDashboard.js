import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProduct } from '../store/slices/productSlice'; // Import the uploadProduct action
import { ToastContainer, toast } from 'react-toastify'; // For showing toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const VendorDashboard = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  // Redux state
  const { loading, error } = useSelector((state) => state.products);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the uploadProduct action
    dispatch(uploadProduct(product));

    // Show success or failure message using toast
    if (!loading && !error) {
      toast.success(`${product.name} uploaded successfully!`);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <ToastContainer /> {/* Toast container for notifications */}
      <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded w-full py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-600"
          disabled={loading} // Disable button if loading
        >
          {loading ? 'Uploading...' : 'Upload Product'}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default VendorDashboard;
