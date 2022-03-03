import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import User from './service/user';
import register from './service/register'

const user = new User();
const register1 = new register();

ReactDOM.render(
  <React.StrictMode>
      <App user={user} register1={register1}/>
  </React.StrictMode>,
  document.getElementById('root')
);
