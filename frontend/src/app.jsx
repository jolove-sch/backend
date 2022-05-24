import React from 'react';
import './app.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './components/page/MainPage';
import LoginPage from './components/page/LoginPage';
import Register from './components/page/Register';
import MonitoringPage from './components/page/MonitoringPage';
import BandRegisterPage from './components/page/BandRegisterPage';
import MobilRegisterPage from './components/page/MobilRegisterPage';
import UserRegisterPage from './components/page/UserRegisterPage';
import HeartPage from './components/page/HeartPage';

function App({user, register1, state, mobile}) {
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
            <MonitoringPage user={user} mobile={mobile}/>
          </Route>
          <Route path="/BandRegisterPage">
            <BandRegisterPage register1={register1} user={user}/>
          </Route>
          <Route path="/MobilRegisterPage">
            <MobilRegisterPage register1={register1} user={user}/>
          </Route>
          <Route path="/UserRegisterPage">
            <UserRegisterPage />
          </Route>
          <Route path="/HeartPage">
            <HeartPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
