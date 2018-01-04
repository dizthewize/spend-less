import uuid from 'uuid-v4';
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE
} from './types'

export const addExpense = (
  {
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
  } = {}
) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

export const removeExpense = ({id} = {}) => ({
    type: REMOVE_EXPENSE,
    id
});

export const editExpense = (id, updates) => ({
    type: EDIT_EXPENSE,
    id,
    updates
});

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
})

export const sortByDate = () => ({
  type: SORT_BY_DATE
})

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
})

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate
})

export const setStartDate = endDate => ({
  type: SET_END_DATE,
  endDate
})

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}
