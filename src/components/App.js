import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const[pokemon, setPokemon] = useState([])
  const[inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  function handleSearch(event) {
    setInputValue(event.target.value)
  }

  const filterPokemon = pokemon.filter((eachPokemon) => eachPokemon.name.toLowerCase().includes(inputValue.toLowerCase()))

  return (
    <div className="App">
      <PokemonPage pokemon={filterPokemon} setPokemon={setPokemon} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
