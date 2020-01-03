import {ADD_USER, MESSAGE_RECEIVED} from '../actions/actionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
    case MESSAGE_RECEIVED:
      return state.concat ([
        {
          message: action.message,
          author: action.author,
          id: action.id,
        },
      ]);
    default:
      return state;
  }
};

export default messages;
