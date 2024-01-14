import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollContextProvider from './ContextAPI/ScrollConext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ScrollContextProvider>
    <App />
  </ScrollContextProvider>
);