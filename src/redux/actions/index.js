import {
  USERS_LIST,
  ADD_MESSAGE,
  ADD_USER,
  MESSAGE_RECEIVED,
} from './actionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});

export const addUser = name => ({
  types: ADD_USER,
  id: nextUserId++,
  name,
});

export const messageReceived = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
});

export const populateUserList = users => ({
  type: USERS_LIST,
  users,
});
