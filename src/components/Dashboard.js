import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

  render() {
    return (
      <Fragment>
        <h2>Home</h2>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {};
}

export default connect(mapStateToProps)(Dashboard)
