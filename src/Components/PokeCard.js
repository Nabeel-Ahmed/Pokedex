import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    // display: 'flex',
 
  },
  paper: {
    width: 200,
    // display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    
    // display: 'inline-block',
  
  },
  PokeHolder : {
    // flexDirection: 'row',
    
  },
});

function PokeCard(props) {
  const { classes } = props;

  return (
    <div className={classes.PokeHolder}>
      <Grid container spacing={16}>
       <Grid item xs={3}>
          <Paper className={classes.paper}>
        
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

export default withStyles (styles)(PokeCard);

