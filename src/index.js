import { StrictMode } from "react";
import { APIContextProvider } from "./context/APIContext";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </StrictMode>
);
