import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { BrowserRouter as Router, Route, Link, Switch, Redirect,  withRouter } from "react-router-dom";


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function list(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
      <ListItem button component={Link} to="/Pokemon">
          <ListItemText inset primary="Pokemon"  />
        </ListItem>
        <ListItem button component={Link} to="/Berries">
          <ListItemText inset primary="Berries" />
        </ListItem>
      </List>
    </div>
  );
}

list.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(list);