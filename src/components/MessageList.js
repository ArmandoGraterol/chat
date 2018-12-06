import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends Component {
  render() {
    const messages = this.props.message;
    return(
      <div className="message-list">
        <ul>
          {messages.map(message => (
            <Message key={message.id} {...message} />
          ))}
        </ul>
      </div>
    );
  }
}

MessageList.proptypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(MessageList);