import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import NotFound from './NotFound';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/create' component={AddExpense} />
              <Route path='/edit/:id' component={EditExpense} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
