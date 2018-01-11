import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <header className="header">
      <h3 className="title">Save More, Spend Less</h3>
      <div className="actions">
        <NavLink exact to='/'>Dashboard</NavLink>
        <NavLink to='/create'>Create Expense</NavLink>
        <NavLink to='/edit'>Edit Expense</NavLink>
      </div>
    </header>
  </div>
);

export default Header;
