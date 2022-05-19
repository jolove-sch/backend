import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import User from './service/user';
import register from './service/register'
import Mobile from './service/mobile';

const user = new User();
const register1 = new register();
const mobile = new Mobile();

ReactDOM.render(
  <React.StrictMode>
      <App user={user} register1={register1} mobile={mobile}/>
  </React.StrictMode>,
  document.getElementById('root')
);
