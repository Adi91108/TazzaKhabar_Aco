import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainIndex from "./components/MainIndex.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainIndex>
      <App />
    </MainIndex>
  </StrictMode>
);
