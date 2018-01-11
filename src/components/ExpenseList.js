import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div className="content-container">
      {/* <div className="list-header">
          <div className="show-for-mobile">Expense</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
      </div> */}
      <div className="list-table">
          {
              props.expenses.length === 0 ? (
                  <div className="expense-item-message">
                      <h2>No expenses</h2>
                  </div>
              ) : (
                  props.expenses.map(expense => {
                      return (
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th>Created At</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <ExpenseItem key={expense.id} {...expense} />
                          </tbody>
                        </table>
                      )
                  })
              )
          }
      </div>
  </div>
);

const mapStateToProps = state => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
