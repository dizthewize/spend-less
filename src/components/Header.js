import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h2>Spend Less</h2>
    <NavLink exact to='/'>Dashboard</NavLink>
    <NavLink to='/create'>Create Expense</NavLink>
    <NavLink to='/edit'>Edit Expense</NavLink>
  </header>
);

export default Header;
