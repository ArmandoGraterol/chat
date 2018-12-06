import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  render() {
    const users = this.props.user;
    return(
      <div className="sidebar">
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Sidebar.proptypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Sidebar);