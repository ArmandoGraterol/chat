import { ADD_MESSAGE, MESSAGE_RECEIVED } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return [
        ...state,
        {message: action.message,
        author: action.author,
        id: action.id}
      ];
    default:
      return state;
  }
}