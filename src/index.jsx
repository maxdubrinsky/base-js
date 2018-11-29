import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { install } from '@material-ui/styles';

import App from './App';

install();

const theme = createMuiTheme();

const Container = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Container />, document.getElementById('app'));
