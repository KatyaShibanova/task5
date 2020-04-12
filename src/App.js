import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Tests from './tests';
import Welcome from './welcome';

function App() {
  return <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/tests" component={Tests} />
  </Switch>
</BrowserRouter>;
}

export default App;
