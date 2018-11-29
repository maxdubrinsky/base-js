import React from 'react';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Counter from './Counter';
import Form from './Form';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing.unit * 3,
    background: '#DDD',
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing.unit * 4,
    },
  },
  container: {
    width: 400,
    padding: theme.spacing.unit * 2,
    margin: [[0, 'auto']],
    '& > *:not(:last-child)': {
      marginRight: theme.spacing.unit,
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Counter />
      </Paper>
      <Paper className={classes.container}>
        <Form />
      </Paper>
    </div>
  );
};

export default App;
