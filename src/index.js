import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from 'js-cookie';
import './index.css';
import App from './App';

Cookie.set('cam', '957d0fb3-007a-4ae2-86c6-097b519628f6');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
