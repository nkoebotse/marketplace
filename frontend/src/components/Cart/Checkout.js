import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 }; // Get both cart and total from location state

  const [confirmation, setConfirmation] = useState("");  // Confirmation message state

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Booked Rooms:</h2>
        <ul className="mb-4">
          {cart.map((booking, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{booking.roomName}</span>
              <span>R{booking.price}</span>
            </li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Total Amount: R{total.toFixed(2)}</h2>
        
        <PayPalScriptProvider options={{ "client-id": "AWcIWO9HCsV9MMtYxbrNW7nPD0KIgDS-Z-aVIjmgCx-h3ayTa-GUKOhQdtMrTCukTSohR576z0ZBSp4p" }}>
          <PayPalButtons 
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: total.toString(),  // PayPal expects amount as a string
                  },
                }],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                console.log('Transaction completed by ' + details.payer.name.given_name);
                setConfirmation("Payment successful! Thank you for your booking.");
              });
            }}
            onError={(err) => {
              console.error("PayPal Checkout onError", err);
              setConfirmation("Payment failed, please try again.");
            }}
          />
        </PayPalScriptProvider>
        
        {/* Confirmation Message */}
        {confirmation && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
            {confirmation}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
