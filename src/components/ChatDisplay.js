import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import {myTheme} from '../helper/myTheme';
import Messages from './Messages';
import PropTypes from 'prop-types';

const useStyles = makeStyles (myTheme);

export default function ChatDisplay({users, messages}) {
  const classes = useStyles ();

  return (
    <div className={classes.chatFlex}>
      <div className={classes.topicPage}>
        <List>
          {users.map (user => (
            <ListItem key={user.id} button>
              <ListItemText>
                {user.name}
              </ListItemText>
            </ListItem>
          ))}

        </List>
      </div>
      <ul>
        {messages.map (message => (
          <div className={classes.chatFlex}>
            <Messages key={message.id} {...message} />
          </div>
        ))}

      </ul>

    </div>
  );
}

// ChatDisplay.PropTypes = {
//   messages: PropTypes.arrayOf (
//     Proptypes.shape ({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,

//   users: PropTypes.arrayOf (
//     PropTypes.shape ({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
