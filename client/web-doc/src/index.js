import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';

import { router } from './Routes/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />,
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
);

