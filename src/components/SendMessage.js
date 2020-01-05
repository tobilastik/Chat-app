import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {myTheme} from '../helper/myTheme';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles (myTheme);

export default function SendMessage (props) {
  let input;
  const classes = useStyles ();
  const [textValue, setTextValue] = React.useState ('');

  return (
    <div className={classes.chatFlex}>
      <TextField
        label="Type a message"
        className={classes.chatBox}
        variant="outlined"
        value={textValue}
        onChange={e => setTextValue (e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.dispatch (input.value, 'Me');
            input.value = '';
          }
        }}
        ref={node => {
          input = node;
        }}
      />

      <Button variant="contained" className={classes.button} color="primary">
        Send
      </Button>
    </div>
  );
}

// SendMessage.PropTypes = {
//   dispatch: PropTypes.func.isRequired,
// };
