import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messageActions';

class AddMessage extends Component {
  state = {
    text: '',
    author: 'Me'
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    const newMessage = {
      text: this.state.text,
      author: this.state.author,
    }
    this.props.addMessage(newMessage);
    e.target.value = '';
  }

  render() {
    return(
      <div className="new-message">
        <form onSubmit={this.onSubmit}>
          <input name="text" type="text" onChange={this.onChange} placeholder="Write a message..."/>
          <button type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
});

export default connect(mapStateToProps, { addMessage })(AddMessage);