import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

// Pages
import IndexPage from "./pages/IndexPage/IndexPage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import EpisodePage from "./pages/EpisodePage/EpisodePage";
import Error404Page from "./pages/Error404Page/Error404Page";
import Footer from "./components/Footer/Footer";

// Import API Context
import { APIContext } from "./context/APIContext";
import { useContext, useEffect } from "react";

// Stylesheet
import "./App.css";
import ItemDetail from "./components/ItemDetail/ItemDetail";

const App = () => {
  const { fetchCharacterData, fetchLocationData, fetchEpisodeData } =
    useContext(APIContext);

  // Fetch data on mount
  useEffect(() => {
    fetchCharacterData();
    fetchLocationData();
    fetchEpisodeData();
  }, []); // eslint-disable-line

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/character" element={<CharacterPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/episode" element={<EpisodePage />} />
          <Route path="character/:id" element={<ItemDetail />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
