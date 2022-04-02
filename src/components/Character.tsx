import React from "react";
import { ICharacter } from "./Characters";

interface ICharacterProps {
  character: ICharacter;
}

const Character = ({ character }: ICharacterProps) => {
  return (
    <div className="card">
      <img src={character.image} alt="Character Image" />

      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">{`${character.status} - ${character.species}`}</p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
};

export default Character;
