import {connect} from 'react-redux';
import SendMessageComponent from '../components/SendMessage';
import {addMessage} from '../redux/actions/index';

const mapDisPatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch (addMessage (message, author));
  },
});

export const SendMessage = connect (() => ({}), mapDisPatchToProps) (
  SendMessageComponent
);
