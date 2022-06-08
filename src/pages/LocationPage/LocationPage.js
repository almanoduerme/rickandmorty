import { useContext } from "react";
import { APIContext } from "../../context/APIContext";
import './LocationPage.css';

const LocationPage = () => {
  const { locationData } = useContext(APIContext);
  
  return (
    <div className="location-page">
      {locationData.map((location) => (
        <div key={location.id} className="location-card">
          <h1>{location.name}</h1>
          <p>{location.planet}</p>
          <p>{location.dimension}</p>
          <p>{location.type}</p>
          <p><span>Residents: </span>{location.residents.length}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationPage;
