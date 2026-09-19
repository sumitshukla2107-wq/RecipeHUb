import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">🍳</span>
          <span>Recipe<span>Hub</span></span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/recipes" className={navClass}>Recipes</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <Link to="/create" className="create-btn">+ Create Recipe</Link>
        </nav>
      </div>
    </header>
  );
}
