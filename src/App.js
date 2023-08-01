import React from 'react';
import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
    
    console.log(response);
    }
  );
};

  return (
    <div className="App">
      <div className="TitleSection">
      <h1>Legendary & Mythical Pokémon </h1>
      <input type="text" onChange={(event) => {
        setPokemonName(event.target.value);
      }}
      />
      <button onClick={searchPokemon}>Search Pokémon</button>
      </div>
    </div>
  );
}

export default App;
