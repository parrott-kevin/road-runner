import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';

const Navbar = ({ title }) => {
  return (
    <div className={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default withTheme()(Navbar);
