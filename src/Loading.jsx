import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const Loading = () => {
  return (
    <Grid container spacing={16} alignItems="center" justify="center">
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
