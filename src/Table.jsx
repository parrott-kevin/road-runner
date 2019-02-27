import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};

class SimpleTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, data } = this.props;

    if (data.length === 0) {
      return <Paper className={classes.root}>Loading</Paper>;
    }
    const rows = data.map(i => {
      return (
        <TableRow key={i.id}>
          <TableCell component="th" scope="row">
            {i.name}
          </TableCell>
          <TableCell component="th" scope="row">
            {i.username}
          </TableCell>
          <TableCell component="th" scope="row">
            {i.email}
          </TableCell>
        </TableRow>
      );
    });
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(SimpleTable);
