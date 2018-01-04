import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/types';

const expensesDefaultState = [];

export default function(state = expensesDefaultState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return [ ...state, action.expense]
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id)
    case EDIT_EXPENSE:
      return state.map(({ id }) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
}
