import { Link } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const { recipes, deleteRecipe } = useContext(RecipeContext);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">YOUR PERSONAL RECIPE BOOK</span>
          <h1>Good food starts with a <span>great recipe.</span></h1>
          <p>
            Discover recipes, save your favorites and create your own
            collection of dishes in one simple place.
          </p>
          <div className="hero-actions">
            <Link to="/recipes" className="primary-btn">Explore Recipes</Link>
            <Link to="/create" className="secondary-btn">Create Recipe</Link>
          </div>
        </div>

        <div className="hero-card">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
            alt="Healthy food"
          />
          <div className="hero-card-info">
            <span>Featured</span>
            <strong>Cook something delicious today.</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COLLECTION</span>
            <h2>Latest Recipes</h2>
          </div>
          <Link to="/recipes" className="view-link">View all →</Link>
        </div>

        <div className="recipe-grid">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onDelete={deleteRecipe} />
          ))}
        </div>
      </section>

      <section className="feature-strip">
        <div>
          <span className="feature-icon">📝</span>
          <div><strong>Create</strong><p>Add your own recipes.</p></div>
        </div>
        <div>
          <span className="feature-icon">🔎</span>
          <div><strong>Find</strong><p>Search your collection.</p></div>
        </div>
        <div>
          <span className="feature-icon">💾</span>
          <div><strong>Keep</strong><p>Saved automatically in your browser.</p></div>
        </div>
      </section>
    </>
  );
}
