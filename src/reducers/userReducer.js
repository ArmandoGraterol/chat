import { ADD_USER, USER_LIST } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case ADD_USER:
      return [
        ...state,
        {name: action.name,
        id: action.id,}
      ]

    case USER_LIST:
      return action.userList;
      
    default:
      return state;
  }
}