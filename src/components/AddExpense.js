import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ExpenseForm from './ExpenseForm';

export class AddExpense extends Component {
    onSubmit = expense => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="add-edit">
                <div className="expense-title">
                    <h1 style={{textAlign: 'center'}} className="title">Add Expense</h1>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(AddExpense);
