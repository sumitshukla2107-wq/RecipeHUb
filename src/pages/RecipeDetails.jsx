import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipe, deleteRecipe } = useContext(RecipeContext);
  const recipe = getRecipe(id);

  if (!recipe) {
    return (
      <div className="empty-state">
        <h2>Recipe not found</h2>
        <Link to="/recipes" className="primary-btn">Back to Recipes</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm(`Delete "${recipe.title}"?`)) {
      deleteRecipe(recipe.id);
      navigate("/recipes");
    }
  };

  return (
    <article className="details">
      <Link to="/recipes" className="back-link">← Back to Recipes</Link>

      <div className="details-hero">
        <img src={recipe.image} alt={recipe.title} />
        <div className="details-title">
          <span className="category-badge static">{recipe.category}</span>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>

      <div className="details-content">
        <section>
          <h2>Ingredients</h2>
          <div className="text-block">{recipe.ingredients}</div>
        </section>

        <section>
          <h2>Instructions</h2>
          <div className="text-block">{recipe.instructions}</div>
        </section>
      </div>

      <button className="delete-large" onClick={handleDelete}>
        Delete Recipe
      </button>
    </article>
  );
}
