import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AgrotisProvider from './context/AgrotisProvider';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AgrotisProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AgrotisProvider>
);
