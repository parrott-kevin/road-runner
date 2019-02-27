import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home.jsx';
import DetailCard from './DetailCard.jsx';

const Root = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/person/:id" component={DetailCard} />
    </Fragment>
  </Router>
);

export default Root;
