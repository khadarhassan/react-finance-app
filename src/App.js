import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import { FinanceProvider } from './contexts/finance-context';

const App = () => {
  return (
    <FinanceProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </FinanceProvider>
  );
};

export default App;
