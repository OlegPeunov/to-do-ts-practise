import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css.scss';
import App from './components/App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
