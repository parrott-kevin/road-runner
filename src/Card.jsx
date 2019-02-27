import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes, data, details, showDetails } = props;
  console.log(details);

  if (data.length === 0) {
    return <Paper className={classes.root}>Loading</Paper>;
  }

  return data.map(i => {
    // if ((details = i.id)) {
    //   return (
    //     <Card key={i.id} className={classes.card}>
    //       <CardContent>
    //         <Typography
    //           className={classes.title}
    //           color="textSecondary"
    //           gutterBottom
    //         >
    //           {i.name}
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           {i.username}
    //         </Typography>
    //         <Typography component="p">{i.email}</Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">Learn Less</Button>
    //       </CardActions>
    //     </Card>
    //   );
    // } else {
    return (
      <Card key={i.id} className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {i.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {i.username}
          </Typography>
          <Typography component="p">{i.email}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => showDetails(i.id)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
    // }
  });
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  details: PropTypes.any,
  showDetails: PropTypes.func
};

export default withStyles(styles)(SimpleCard);
