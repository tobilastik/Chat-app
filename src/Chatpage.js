//Using React
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles (theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing (3, 2),
  },
  chatFlex: {
    display: 'flex',
    alignItems: 'center',
  },

  topicPage: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey',
  },
  chatPage: {
    width: '80%',
    padding: '20px',
    height: '400px',
  },
  chatBox: {
    width: '85%',
    margin: '10px',
  },
  button: {
    width: '10%',
  },
  chatTopic: {
    borderWidth: '1px solid gray',
    borderBottomWidth: '1px',
  },
}));

export default function Chatpage () {
  const classes = useStyles ();

  const [textValue, setTextValue] = React.useState ('');

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
        <div className={classes.chatFlex}>
          <div className={classes.topicPage}>
            <List>
              {['Whatsapp Group Chat'].map (topic => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}

            </List>
          </div>
          <div className={classes.chatPage}>

            {[{from: 'Tobi', msg: 'App in progress'}].map ((chat, i) => (
              <div className={classes.chatFlex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography variant="p">
                  {chat.msg}
                </Typography>

              </div>
            ))}

          </div>

        </div>

        <div className={classes.chatFlex}>
          <TextField
            label="Type a message"
            className={classes.chatBox}
            variant="outlined"
            value={textValue}
            onChange={e => setTextValue (e.target.value)}
          />
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
