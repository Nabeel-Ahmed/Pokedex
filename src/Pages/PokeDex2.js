// // The extends keyword is used in class declarations or class expressions to create a class as a child of another class
// class PokemonList extends React.Component {
//     // A constructor method is a special method for creating and initializing an object created with a class. A class can only have one constructor. A constructor can use the super kekyword to call the constructor of a parent class.
//     constructor(props) {
//       super(props);
//       // this = super(props)
      
//       // by default you can't access properties, state and component methods like setState from event handlers so you need to bind them. This way, my event handler has its context bound to the component instance and I can access props and state.
//       this.handleGenChange = this.handleGenChange.bind(this);
//       this.state = {
//         pokemon: [],
//         generation: "Generation One"
//       };
//     }
  
//     handleGenChange(generation) {
//       this.setState({ generation });
//     }
  
//     getPokemon() {
//       fetch("https://pokeapi.co/api/v2/pokemon/?limit=386", {
//         method: "GET"
//       }).then(response => {
//         if (response.ok) {
//           response.json().then(json => {
//             //console.log(json.results[385].name);
//             this.setState({
//               pokemon: json.results
//             });
//           });
//         }
//       });
//     }
  
//     componentDidMount() {
//       this.getPokemon();
//     }
  
//     render() {
//       let { pokemon, generation } = this.state;
//       if (generation === "Generation One") {
//         pokemon = pokemon.slice(0, 151);
//       } else if (generation === "Generation Two") {
//         pokemon = pokemon.slice(151, 251);
//       } else {
//         pokemon = pokemon.slice(251, 386);
//       }
  
//       let pokemonList;
//       pokemonList = (
//         <div>
//           <PickGeneration onGenerationChange={this.handleGenChange} />
//           <div className="pokemon-container">
//             {pokemon.map((monster, index) =>
//               <Pokemon key={monster.name} id={index + 1} pokemon={monster.name} />
//             )}
//           </div>
//         </div>
//       );
//       return <div>{pokemonList}</div>;
//     }
//   }
  
//   class PickGeneration extends React.Component {
//     constructor(props) {
//       super(props);
//       this.generationClick = this.generationClick.bind(this);
//       this.state = {active: "Generation One"};
//     }
//     generationClick(generation) {
//       //this.setState({ generation: generation });
//       this.props.onGenerationChange(generation);
//       this.setState({active: generation});
//     }
  
//     render() {
//       const generationList = [
//         "Generation One",
//         "Generation Two",
//         "Generation Three"
//       ];
//       let active = this.state.active;
//       const generationSingle = generationList.map(generation =>
//         // keys help React identify which items have changed, are added or removed. Keys need to be added to elements inside the array. Elements inside the map call need keys! Two different arrays can have the same key.
        
//         <button className={"gen-button " + ((active === generation)? 'button-active': '')} key={generation} onClick={() => this.generationClick(generation)}>
//           {generation}
//         </button>
//       );
//       return <div className="button-container">{generationSingle}</div>;
//     }
//   }
  
//   class Pokemon extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { isBack: false };
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(pokemon) {
//       this.setState(prevState => ({
//         isBack: !prevState.isBack
//       }));
//     }
//     render() {
//       let pokemon = this.props.pokemon;
  
//       switch (pokemon) {
//         case "nidoran-f":
//           pokemon = "nidoranf";
//           break;
//         case "nidoran-m":
//           pokemon = "nidoranm";
//           break;
//         case "deoxys-normal":
//           pokemon = "deoxys";
//           break;
//       }
//       const id = this.props.id;
  
//       return (
//         <div
//           className="pokemon-single-container"
//           onClick={() => this.handleClick(pokemon)}
//         >
//           <div>
//             <img
//               className="sprites"
//               src={`http://pokestadium.com/sprites/xy/${this.state.isBack   ? "back/" + pokemon : pokemon}.gif`}
//             />
//             <div className="align-bottom"> {pokemon}</div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<PokemonList />, document.getElementById("root"));
  