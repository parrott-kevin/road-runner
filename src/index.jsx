import React from 'react';
import { render } from 'react-dom';

import Root from './Root.jsx';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blueGrey
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1200
    }
  },
  typography: {
    useNextVariants: true
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Root />
    </MuiThemeProvider>
  );
};

render(<App />, document.getElementById('app'));
