import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import User from './service/user';

const user = new User();

ReactDOM.render(
  <React.StrictMode>
      <App user={user}/>
  </React.StrictMode>,
  document.getElementById('root')
);
