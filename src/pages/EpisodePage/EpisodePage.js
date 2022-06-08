import { useContext } from "react";
import { APIContext } from "../../context/APIContext";
import './EpisodePage.css';

const EpisodePage = () => {
  const { episodeData } = useContext(APIContext);
  
  return (
    <div className="episode-page">
      {episodeData.map((episode) => (
        <div key={episode.id} className="episode-card">
          <h1>{episode.name}</h1>
          <p>{episode.episode}</p>
          <p>{episode.air_date}</p>
          <p><span>Number of characters: </span>{episode.characters.length}</p>
        </div>
      ))}
    </div>
  );
};

export default EpisodePage;
