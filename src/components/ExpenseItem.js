import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <tr className="expense-item">
    <td>
      <Link className="list-item" to={`/edit/${id}`}>
        {description}
      </Link>
    </td>
    <td>{moment(createdAt).format('MMMM Do, YYYY')}</td>
    <td>{numeral(amount / 100).format('$0,0.00')}</td>
  </tr>
);

export default ExpenseItem;
