import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { Undo } from '@material-ui/icons';

import Navbar from './Navbar.jsx';

const DetailCard = props => {
  const { data } = props;

  return (
    <Fragment>
      <Navbar title="Contact Information" />
      <Card>
        <CardHeader title={data.name} />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="caption">
                    email
                  </Typography>
                  <Typography>{data.email}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="caption">
                    phone
                  </Typography>
                  <Typography>{data.phone}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="caption">
                    website
                  </Typography>
                  <Typography>{data.website}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography color="secondary" variant="caption">
                    Address
                  </Typography>
                  <Typography>{data.address.street}</Typography>
                  {data.address.suite && (
                    <Typography>{data.address.suite}</Typography>
                  )}
                  <Typography>
                    {data.address.city} {data.address.zipcode}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="caption">
                    Company
                  </Typography>
                  <Typography>{data.company.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="secondary" variant="caption">
                    Motto
                  </Typography>
                  <Typography>{data.company.catchPhrase}</Typography>
                  <Typography>{data.company.bs}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/">
                <IconButton>
                  <Undo />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};

DetailCard.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default DetailCard;
