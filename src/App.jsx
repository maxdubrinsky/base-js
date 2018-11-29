import React, { useState, useEffect } from 'react';

import { Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    background: '#DDD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: theme.spacing.unit * 2,
    '& > *:not(:last-child)': {
      marginRight: theme.spacing.unit,
    },
  },
}));

const App = () => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    document.title = `The count is at ${count}`;
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Typography gutterBottom>
          Current count: {count}
        </Typography>
        <Button variant="raised" color="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="raised" color="secondary" onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button variant="raised" onClick={() => setCount(0)}>Reset</Button>
      </Paper>
    </div>
  );
};

export default App;
