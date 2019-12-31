import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { FinanceProvider } from './contexts/finance-context';

const App = () => {
  return (
    <FinanceProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </FinanceProvider>
  );
};

export default App;
