import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
    maxWidth: 345,
  },
  media: {
    height: 90,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div >
        <Grid container spacing={8}>
         <Grid item md={6}>
      
      <Card className={classes.card} style={{flex: 1}} >

        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.name}
        />

        <CardContent>
            
          <Typography gutterBottom variant="headline" component="h2">
            {props.id}
          </Typography>

          <Typography component="p">
            {props.name}
          </Typography>

        </CardContent>
        
        
      </Card>
      </Grid>
      </Grid>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);