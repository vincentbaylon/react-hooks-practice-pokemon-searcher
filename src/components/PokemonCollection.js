import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  console.log(pokemon)
  const displayPokemon = pokemon.map((eachPokemon) => {
    return <PokemonCard key={eachPokemon.id} pokemon={eachPokemon} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
