
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import PokemonTable from './components/PokemonTable';
import { Pokemon } from './components/models/Pokemon';
import { useEffect } from 'react';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results

    let pokemonData = results.map((poke) => {
      return new Pokemon(poke.name, poke.url);
    })


    setPokemon(pokemonData);
    console.log(pokemon)
  }

  return (
    <div className='text-center m-4'>
      <button className='btn btn-primary' onClick={fetchPokemon}>Fetch Pokemon</button>
      <PokemonTable pokemon={pokemon}></PokemonTable>
    </div>
  );
}

export default App;
