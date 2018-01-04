import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export default class Dashboard extends Component {

  render() {
    return (
      <Fragment>
        <ExpenseListFilters />
        <ExpenseList />
      </Fragment>
    );
  }
}
