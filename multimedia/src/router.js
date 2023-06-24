import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './App';
import About from './components/About';
import Renting from './components/Renting';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import App from './App';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Renting" component={Renting} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
