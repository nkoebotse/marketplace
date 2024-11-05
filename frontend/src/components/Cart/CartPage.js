import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Calculate total price by summing item price * quantity for each item
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch remove action
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch clear cart action
  };

  const handleProceedToCheckout = () => {
    // Navigate to the checkout page and pass cart and totalAmount as state
    navigate('/checkout', { state: { cart: cartItems, total: totalAmount } });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Price: R{item.price}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-xl font-semibold">R{item.price * item.quantity}</p>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mt-6">
            <p className="text-2xl font-semibold">Total Amount</p>
            <p className="text-xl font-semibold">R{totalAmount}</p>
          </div>

          {/* Cart Action Buttons */}
          <div className="mt-6 space-y-4 text-center">
            {/* Clear Cart Button */}
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Clear Cart
            </button>
            
            {/* Proceed to Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
