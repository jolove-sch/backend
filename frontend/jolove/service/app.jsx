import React from 'react';
import './app.css';
import Login from './components/pages/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SingUp from './components/pages/singup';
import MainPage from './components/pages/mainpage';

function App({user}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={['/', 'home']}>
            <Login user={user} />
          </Route>
          <Route path="/Signup">
            <SingUp user={user} />
          </Route>
          <Route path="/Mainpage">
            <MainPage user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
