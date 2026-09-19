import { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

export default function CreateRecipe() {
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (formData) => {
    addRecipe({
      ...formData,
      id: nanoid(),
      createdAt: new Date().toISOString()
    });
    reset();
    navigate("/recipes");
  };

  return (
    <section className="form-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">NEW RECIPE</span>
          <h1>Create Recipe</h1>
          <p>Turn your favorite dish into a saved recipe.</p>
        </div>
      </div>

      <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-grid">
          <div className="field full">
            <label>Recipe Title *</label>
            <input
              placeholder="e.g. Paneer Butter Masala"
              {...register("title", { required: "Recipe title is required" })}
            />
            {errors.title && <small>{errors.title.message}</small>}
          </div>

          <div className="field">
            <label>Category *</label>
            <select {...register("category", { required: "Select a category" })}>
              <option value="">Select category</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snacks</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
            {errors.category && <small>{errors.category.message}</small>}
          </div>

          <div className="field">
            <label>Image URL *</label>
            <input
              placeholder="https://..."
              {...register("image", { required: "Image URL is required" })}
            />
            {errors.image && <small>{errors.image.message}</small>}
          </div>

          <div className="field full">
            <label>Short Description *</label>
            <textarea
              rows="3"
              placeholder="Tell people what makes this recipe special..."
              {...register("description", { required: "Description is required" })}
            />
            {errors.description && <small>{errors.description.message}</small>}
          </div>

          <div className="field">
            <label>Ingredients *</label>
            <textarea
              rows="9"
              placeholder={"1 cup flour\n2 tomatoes\n1 tsp salt"}
              {...register("ingredients", { required: "Ingredients are required" })}
            />
            {errors.ingredients && <small>{errors.ingredients.message}</small>}
          </div>

          <div className="field">
            <label>Instructions *</label>
            <textarea
              rows="9"
              placeholder={"Step 1: Prepare ingredients...\nStep 2: Cook..."}
              {...register("instructions", { required: "Instructions are required" })}
            />
            {errors.instructions && <small>{errors.instructions.message}</small>}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="secondary-btn" onClick={() => navigate("/recipes")}>
            Cancel
          </button>
          <button type="submit" className="primary-btn">
            Save Recipe
          </button>
        </div>
      </form>
    </section>
  );
}
