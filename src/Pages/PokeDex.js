import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
// import PokemonCard from '../Components/pokemonCard';
import PokeCard from './../Components/PokeCard';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   color: 'red',
    //   flexGrow: 1,
    },
    gridStyle:{
        display: 'flex',
        // flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        justifyContent : 'space-evenly',
        flexGrow:1,
    },
  });

class Pokedex extends Component {
    state = {
       pokemon: []
    }
    
    
    componentDidMount() {
        axios.get( 'https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then (response => {
                this.setState({pokemon: response.data.results});
                console.log(this.state.pokemon,"we did it")
            });
    }

    
    render () {
        const { classes } = this.props;
           const pokemon = this.state.pokemon.map(pokemon => {
                return  <PokeCard 
                    className={classes.card}
                    id={pokemon.url.slice(34, -1)} 
                    name={pokemon.name} 
                    // img={pokemon.sprites}
                    img={" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.url.slice(34, -1)  + ".png"}
                    key={pokemon.url.slice(34, -1)}
                     />;
            });
        

        return (
            <div className={classes.plssomeonehelpme}  >
                    {/* <Grid container spacing={24}> */}
                     <Grid xs={12}  className={classes.gridStyle}>
                    {pokemon} 
                    
                    </Grid>
                    {/* <Grid container spacing={12}> */}
                    

                    {/* </Grid> */}
                    
                    
            </div>
        );
    }
}  

Pokedex.propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
export default withStyles (styles)(Pokedex);
