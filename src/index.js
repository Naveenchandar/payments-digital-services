import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Payments and Digital Services";
root.render(
  <HashRouter basename="/payments-digitalservices">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
