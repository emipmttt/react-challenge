import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App is now App.tsx
import { Provider } from 'react-redux';
import store from './store'; // Ensure store is a .ts file
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
