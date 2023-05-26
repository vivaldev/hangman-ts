import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { GameProvider } from "./components/context/GameProvider.tsx";

// Use GameProvider here to wrap the App component, so the context is available to all the children components
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
