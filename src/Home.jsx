import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';
import SimpleCard from './SimpleCard.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      details: 0
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({ data });
  }

  toggleDetails(id) {
    if (this.state.details === id) {
      this.setState({ details: 0 });
    } else {
      this.setState({ details: id });
    }
  }

  render() {
    const { data } = this.state;
    if (data.length === 0) {
      return (
        <Grid container spacing={16} alignItems="center" justify="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      );
    }

    const items = data.map(i => {
      return (
        <Grid key={i.id} item xs={4}>
          <SimpleCard data={i} toggleDetails={this.toggleDetails} />
        </Grid>
      );
    });
    return (
      <Grid container spacing={16}>
        {items}
      </Grid>
    );
  }
}

export default Home;
