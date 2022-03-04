import React from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import MonitoringPage from './components/MonitoringPage';
import BandRegisterPage from './components/BandRegisterPage';
import MobilRegisterPage from './components/MobilRegisterPage';
import UserRegisterPage from './components/UserRegisterPage';

function App({user, register1, state}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={['/', 'home']}>
            <LoginPage user={user} />
          </Route>
          <Route path="/Register">
            <Register user={user} />
          </Route>
          <Route path="/MainPage">
            <MainPage user={user} state={state}/>
          </Route>
          <Route path="/MonitoringPage">
            <MonitoringPage />
          </Route>
          <Route path="/BandRegisterPage">
            <BandRegisterPage register1={register1}/>
          </Route>
          <Route path="/MobilRegisterPage">
            <MobilRegisterPage register1={register1}/>
          </Route>
          <Route path="/UserRegisterPage">
            <UserRegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
