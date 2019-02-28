import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { Grid } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import Navbar from './Navbar.jsx';
import SimpleCard from './SimpleCard.jsx';

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes,
      location: { search },
      data
    } = this.props;

    const { name } = queryString.parse(search);
    const items = data.map(i => {
      const item = (
        <Grid key={i.id} item xs={12} sm={6} md={4}>
          <SimpleCard data={i} />
        </Grid>
      );
      if (name) {
        if (i.name.toLowerCase().includes(name.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      } else {
        return item;
      }
    });

    return (
      <Fragment>
        <Navbar title="Contacts" />
        <div className={classes.toolbar} />
        <Grid container spacing={16}>
          {items}
        </Grid>
      </Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object,
  location: PropTypes.object,
  data: PropTypes.array
};

export default withStyles(styles)(Home);
