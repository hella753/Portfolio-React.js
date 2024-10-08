import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppNavigation from "./components/AppNavigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AppNavigation />
  </React.StrictMode>
);
