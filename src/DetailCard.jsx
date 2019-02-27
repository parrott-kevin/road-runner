import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { CircularProgress, Grid } from '@material-ui/core';

class DetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const { data, match } = this.props;
    if (!data) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const filtered = response.data.find(i => {
        return parseInt(match.params.id, 10) === i.id;
      });
      this.setState({ data: filtered });
    } else {
      this.setState({ data });
    }
  }

  render() {
    const { data } = this.state;
    if (!data.id) {
      return (
        <Grid container spacing={16} alignItems="center" justify="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      );
    }
    return <div>Hello, {data.name}</div>;
  }
}

DetailCard.propTypes = {
  match: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default DetailCard;
