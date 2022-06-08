import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ character }) => {
  const { name, image, gender, origin, location, status, species } = character;
  return (
    <div className="item-container">
      <div className="item-card">
        <h1 className="item-title">{name}</h1>
        <img src={image} alt={name} className="item-image" />
        <p className="item-description"><span>Gender:</span> {gender}</p>
        <p className="item-status"><span>Status: </span>{status}</p>
        <p className="item-species"><span>Species: </span>{species}</p>
        <p className="item-origin"><span>Origin Name: </span>{origin.name}</p>
        <p className="location"><span>Location: </span>{location.name}</p>

        <NavLink to={`/character`} className="item-back">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default Item;
