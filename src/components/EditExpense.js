import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions';
import ExpenseForm from './ExpenseForm';

export class EditExpense extends Component {
    onSubmit = expense => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="add-edit">
                <div className="expense-title">
                    <h1 style={{textAlign: 'center'}} className="page-header__title">Edit Expense</h1>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button-secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

// const mapDispatchToProps = (dispatch, props) => ({
//     editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
//     removeExpense: data => dispatch(startRemoveExpense(data))
// });

export default connect(mapStateToProps)(EditExpense);
