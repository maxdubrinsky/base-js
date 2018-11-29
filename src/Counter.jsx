import React, { useState, useEffect } from 'react';

import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `The count is at ${count}`;
  });

  return (
    <React.Fragment>
      <Typography gutterBottom>Current count: {count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </Button>
      <Button variant="contained" onClick={() => setCount(0)}>
        Reset
      </Button>
    </React.Fragment>
  );
};

export default Counter;
