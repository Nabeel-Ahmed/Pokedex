import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        flexGrow: 1,
    },
        Paper: {
            height: 1420,
            width: 60,
    }
})

class PokemonCard extends Component {
    state =
    {
    id: 'no backend',
    img: 'no backend',
    name: 'no backend',
    }

    // componentDidMount() {
    //     axios.get('https://pokeapi.co/api/v2/pokemon-form/1/')
    //       .then(response => {
            
    //         console.log(response.data.name);
    //         this.setState({
    //             name: response.data.name,
    //             id: response.data.id,
    //             img: response.data.sprites.front_default
    //             // img: response.data.name
    //          })
    //           // console.log(response[0].name);
    //       });
    //   }
    
    render() {
        if (this.state.id && this.state.img && this.state.name === '' )
            {
                return null;
            }
        return ( 


           <div>
               <Grid container spacing={24}>
                <Grid item xs={2}>
                <Paper>
                   
                <Typography variant="headline" component="h3">
                    {this.state.id}
                </Typography>
                <img src={this.state.img} alt="pokemon" />

                <Typography variant="headline" component="hp">
                {this.state.name}
                    </Typography>

               </Paper>
               </Grid>
               </Grid>
            </div>
            
        );
    }
}

 
export default withStyles(styles) (PokemonCard);
