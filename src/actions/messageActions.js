import { ADD_MESSAGE, ADD_USER, MESSAGE_RECEIVED, USER_LIST} from './types';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  message: newMessage.text,
  author: newMessage.author,
});

export const addUser = (name) => ({
  type: ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (incomingMessage) => {
  nextMessageId++;
  return {
    type: MESSAGE_RECEIVED,
    id: incomingMessage.id,
    message: incomingMessage.text, 
    author: incomingMessage.author,
  }
};

export const populateUserList = userList => ({
  type: USER_LIST,
  userList
});