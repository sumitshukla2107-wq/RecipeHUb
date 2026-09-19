import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="eyebrow">ABOUT RECIPEHUB</span>
        <h1>A simple home for all the food you love.</h1>
        <p>
          RecipeHub is a React recipe manager built to make collecting and
          organizing homemade recipes easy. Create a recipe, browse your
          collection and find a dish whenever you need it.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <span>01</span>
          <h2>Create</h2>
          <p>Add a title, image, ingredients, instructions and category to build your recipe.</p>
        </div>
        <div className="about-card">
          <span>02</span>
          <h2>Organize</h2>
          <p>Search recipes and filter them by category so your collection stays easy to use.</p>
        </div>
        <div className="about-card">
          <span>03</span>
          <h2>Keep</h2>
          <p>Your recipes are stored in localStorage, so they remain after a browser refresh.</p>
        </div>
      </div>

      <div className="about-cta">
        <div>
          <h2>Ready to add your first recipe?</h2>
          <p>Start building your personal cookbook.</p>
        </div>
        <Link to="/create" className="primary-btn">Create Recipe</Link>
      </div>
    </section>
  );
}
