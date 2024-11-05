import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer'; // Assuming this is your combined reducer

const store = createStore(
    rootReducer,
    // applyMiddleware(...), // add any middleware if needed
);

export const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default store; // Default export for store
