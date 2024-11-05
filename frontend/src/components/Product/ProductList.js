import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import Modal from '../Modal'; // Import the Modal

const ProductList = () => {
  const products = [
    { 
      id: 1, 
      name: 'Graphic Tee', 
      price: '180', 
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg' 
    },
    { 
      id: 2, 
      name: 'Chino Pants', 
      price: '500', 
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg' 
    },
    { 
      id: 3, 
      name: 'Hooded Sweatshirt', 
      price: '350', 
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg' 
    },
    { 
      id: 4, 
      name: 'Summer Dress', 
      price: '300', 
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg' 
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [itemAdded, setItemAdded] = useState('');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
    setItemAdded(product.name); // Set the name of the item added
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="relative w-full h-56 sm:h-64 bg-gray-200 group">
              <img
                alt={product.name}
                src={product.imageSrc}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{`R${product.price}`}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal showModal={showModal} handleClose={handleCloseModal} itemName={itemAdded} />
    </div>
  );
};

export default ProductList;
