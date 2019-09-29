import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import Login from '../pages/login/index';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
};

export default Routes;
