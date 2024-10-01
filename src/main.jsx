import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { makeServer } from './Server/MirageConf'
import "./index.css";
import App from "./App";

makeServer()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
