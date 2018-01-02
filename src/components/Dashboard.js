import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {};
}

export default connect(mapStateToProps)(Dashboard)
