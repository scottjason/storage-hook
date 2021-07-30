import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from 'js-cookie';
import './index.css';
import App from './App';

Cookie.set('cam', '12345ABC6455');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
