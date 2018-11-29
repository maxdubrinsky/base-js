import React from "react";
import ReactDOM from "react-dom";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";
import { install } from "@material-ui/styles";

import App from "./App";

install();

const theme = createMuiTheme();

const Container = () => (
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.Fragment>
);

ReactDOM.render(<Container />, document.getElementById("root"));
