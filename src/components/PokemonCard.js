import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const[front, setFront] = useState(true)
  const { name, hp, sprites } = pokemon

  function handleClick() {
    setFront(!front)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={front ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
