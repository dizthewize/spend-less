import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/types';

const expensesDefaultState = [];

export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [ ...state, action.expense]
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id)
    case EDIT_EXPENSE:
      return state.map(({ id }) => {
        if (action.expense.id === action.id) {
          return {
            ...action.expense,
            ...action.updates
          };
        } else {
          return action.expense;
        }
      });
    default:
      return state;
  }
}
