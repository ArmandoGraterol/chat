import * as types from '../actions/types';
import { addUser, messageReceived, populateUserList} from '../actions/messageActions';

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8080');

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username      
    }))
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch(data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data))
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break;
      case types.USER_LIST:
        dispatch(populateUserList(data.users))
        break;
      default:
        break;
    }
  }

  return socket;
}

export default setupSocket;