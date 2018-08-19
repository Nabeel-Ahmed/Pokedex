import React, { Component } from 'react';
import axios from 'axios';
// import PokemonCard from '../Components/pokemonCard';
import PokeCard from './../Components/PokeCard';

class Pokedex extends Component {
    state = {
       pokemon: []
    }
    // https://jsonplaceholder.typicode.com/posts
    // https://pokeapi.co/api/v2/pokemon-form
    
    componentDidMount() {
        axios.get( 'https://pokeapi.co/api/v2/pokemon/?limit=5')
            .then (response => {
                this.setState({pokemon: response.data.results});
                console.log(this.state.pokemon,"ass")
            });
    }
    render () {
         
           const pokemon = this.state.pokemon.map(pokemon => {
                return <PokeCard 
                    id={pokemon.url.slice(34, -1)} 
                    name={pokemon.name} 
                    // img={pokemon.sprites}
                    img={" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.url.slice(34, -1)  + ".png"}
                    key={pokemon.url.slice(34, -1)}
                     />;
            });
        

        return (
            <div>
                    {pokemon}
               
            </div>
        );
    }
}  
    
 
export default Pokedex;
