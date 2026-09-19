import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import RecipeContext from "./context/RecipeContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeContext>
        <App />
      </RecipeContext>
    </BrowserRouter>
  </React.StrictMode>
);