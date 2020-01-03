import {connect} from 'react-redux';
import ChatDisplayComponent from '../components/ChatDisplay';

export const ChatDisplay = connect (
  state => ({
    messages: state.messages,
    users: state.users,
  }),
  {}
) (ChatDisplayComponent);
