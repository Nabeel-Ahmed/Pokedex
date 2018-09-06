import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    // flexGrow: 1,
 
  },
  paper: {
    // width: 150,
    // height: 150,
    // padding: theme.spacing.unit,
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'left',
    
    // display: 'inline-block',
    // flexDirection: 'row',
    // paddingTop: theme.spacing.unit * 1,
    // paddingBottom: theme.spacing.unit * 1,
  
  },
});

function PokeCard(props) {
  const { classes } = props;

  return (
    <div >
      
          <Paper className={classes.paper}>
        
            <Typography variant="headline" component="h3">
              {props.id}
            </Typography>

            <img src={props.img}/>
            
            <Typography component="p">
              {props.name}
            </Typography>

          </Paper>
    </div>
  );
}

PokeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles)(PokeCard);

