import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import CreateRecipe from "./pages/CreateRecipe";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app-shell">

      <Navbar />

      <main className="container page-content">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/recipes"
            element={<Recipes />}
          />

          <Route
            path="/create"
            element={<CreateRecipe />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/recipe/:id"
            element={<RecipeDetails />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

    </div>
  );
};

export default App;