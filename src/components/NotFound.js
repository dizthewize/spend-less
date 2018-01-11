import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{textAlign: 'center'}}>
    404! Page not found <Link to='/'>Go home</Link>
  </div>
);

export default NotFound;
