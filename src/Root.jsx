import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Loading from './Loading.jsx';
import Home from './Home.jsx';
import DetailCard from './DetailCard.jsx';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    if (data.length === 0) {
      return <Loading />;
    }
    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            render={props => <Home {...props} data={data} />}
          />
          <Route
            exact
            path="/person/:id"
            render={props => {
              const filtered = data.find(i => {
                return parseInt(props.match.params.id, 10) === i.id;
              });
              return <DetailCard {...props} data={filtered} />;
            }}
          />
        </Fragment>
      </Router>
    );
  }
}

export default Root;
