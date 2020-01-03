//Using React
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import {myTheme} from './helper/myTheme';
import {SendMessage} from './containers/SendMessage';
import {ChatDisplay} from './containers/ChatDisplay';

const useStyles = makeStyles (myTheme);

export default function Chatpage () {
  const classes = useStyles ();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          New Chatting Application
        </Typography>
        <div className={classes.chatTopic}>
          <Typography variant="h5" component="h5">
            A chat app
          </Typography>
        </div>
        <ChatDisplay />
        <SendMessage />
      </Paper>
    </div>
  );
}
