import axios from "axios";
import { createContext, useState } from "react";

const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);
  const [param, setParam] = useState("");

  const fetchCharacterData = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${param}`);
    setCharacterData(response.data.results);
  };

  const fetchLocationData = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/location/`)
    setLocationData(response.data.results);
  };

  const fetchEpisodeData = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/`);
    setEpisodeData(response.data.results);
  };

  return (
    <APIContext.Provider value={{ characterData, locationData, episodeData, fetchCharacterData, fetchLocationData, fetchEpisodeData, param, setParam, }}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIContextProvider };
