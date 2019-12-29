import './App.css';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/Sidebar';
import Chatpage from './components/Chatpage';
import '../src/';

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing (2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App () {
  const classes = useStyles ();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Chatpage />
        </Grid>

      </Grid>
    </div>
  );
}
