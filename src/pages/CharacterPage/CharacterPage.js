import { useContext } from "react";
import { APIContext } from "../../context/APIContext";
import { NavLink } from "react-router-dom";
import "./CharacterPage.css";

const CharacterPage = () => {
  const { characterData } = useContext(APIContext);

  return (
    <div className="character-page">
      {characterData.map((character) => (
        <div key={character.id} className="character-card">
          <h1 className="character-name">{character.name}</h1>
          <img src={character.image} alt={character.name} className="character-image" />
          <NavLink to={`/character/${character.id}`} className="character-link">
            View Character
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CharacterPage;