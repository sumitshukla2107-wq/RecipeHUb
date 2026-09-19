import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../context/RecipeContext";

export default function Recipes() {
  const { recipes, deleteRecipe } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(recipes.map((r) => r.category).filter(Boolean))];

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesSearch =
        !query ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query);
      const matchesCategory = category === "All" || recipe.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, search, category]);

  return (
    <section>
      <div className="page-header">
        <div>
          <span className="eyebrow">RECIPE COLLECTION</span>
          <h1>All Recipes</h1>
          <p>{recipes.length} recipes in your collection</p>
        </div>
        <Link to="/create" className="primary-btn">+ New Recipe</Link>
      </div>

      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
          aria-label="Search recipes"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>

      {filtered.length ? (
        <div className="recipe-grid">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onDelete={deleteRecipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🍽️</div>
          <h2>No recipes found</h2>
          <p>Try another search or create a new recipe.</p>
          <Link to="/create" className="primary-btn">Create Recipe</Link>
        </div>
      )}
    </section>
  );
}
