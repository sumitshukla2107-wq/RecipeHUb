import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, onDelete }) {
  return (
    <article className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-image-wrap">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80";
          }}
        />
        <span className="category-badge">{recipe.category}</span>
      </Link>

      <div className="recipe-card-body">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>

        <div className="card-actions">
          <Link to={`/recipe/${recipe.id}`} className="view-link">
            View Recipe →
          </Link>
          <button
            type="button"
            className="delete-btn"
            onClick={() => onDelete(recipe.id)}
            aria-label={`Delete ${recipe.title}`}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
