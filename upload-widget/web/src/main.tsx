// Importa os estilos globais da aplicação
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

// Busca o elemento HTML com id "root" e inicializa a renderização da aplicação React
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
