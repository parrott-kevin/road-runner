import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class SimpleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { classes, data } = this.props;

    const expandIcon = (
      <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: this.state.expanded
        })}
        onClick={this.toggleExpand}
        aria-expanded={this.state.expanded}
        aria-label="Show more"
      >
        <ExpandMore />
      </IconButton>
    );

    return (
      <Card key={data.id} className={classes.card}>
        <CardHeader title={data.name} action={expandIcon} />
        <Collapse in={this.state.expanded} unmountOnExit>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography color="secondary" variant="caption">
                  email
                </Typography>
                <Typography>{data.email}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
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
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={`/person/${data.id}`}>
                  <Button>Show Details</Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
