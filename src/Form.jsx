import React, { useState } from 'react';

import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useFormData = (initialState = {}) => {
  const [data, setData] = useState(initialState);

  const update = (field, value) => setData({ ...data, [field]: value });

  return [data, update];
};

const useStyles = makeStyles({
  form: {
    display: 'block',
  },
});

const Form = () => {
  const [{ input1 }, update] = useFormData({ input1: '' });
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={e => e.preventDefault()}>
      <TextField
        fullWidth
        margin="dense"
        label="Input 1"
        variant="outlined"
        value={input1}
        onChange={({ target: { value } }) => update('input1', value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
