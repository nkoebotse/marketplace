import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Import the standard Provider from react-redux
import store from '../src/components/store'; // Import the store you created for Redux
import { ToastContainer } from 'react-toastify'; // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Redux Provider */}
      <App />
      <ToastContainer /> {/* This renders the container for the toasts */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
