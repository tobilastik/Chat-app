import {createStore} from 'redux';
import chat from './reducers/index';

const store = createStore (
  chat,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
);

export default store;
