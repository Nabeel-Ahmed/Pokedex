import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    flexWrap: 'wrap',
    flexGrow: 1,
    flex: 1,

    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    display: 'grid',
    flexWrap: 'wrap',
    flexGrow: 1,
    flex: 1,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function PokeCard(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={16}>
       <Grid item xs={3}>
          <Paper >
        
        <Typography variant="headline" component="h3">
          {props.id}
        </Typography>

        <img src={props.img}/>
        
        <Typography component="p">
          {props.name}
        </Typography>
          </Paper>

          

        </Grid>
      </Grid>
    </div>
  );
}

PokeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PokeCard;

