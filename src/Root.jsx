import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import Table from './Table.jsx';
import Card from './Card.jsx';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      details: 0
    }
    this.showDetails = this.showDetails.bind(this);
  }

  async componentDidMount() {
    const {data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({ data })
  }

  showDetails (id) {
    this.setState({ details: id })
  }

  render () {
    const { data, details } = this.state;
    return (
      <Card data={data} details={details} showDetails={this.showDetails} />
    );
  }
}


export default Root;
