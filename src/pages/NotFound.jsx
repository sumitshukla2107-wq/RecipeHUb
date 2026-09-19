import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="empty-state">
      <div className="empty-icon">404</div>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="primary-btn">Go Home</Link>
    </div>
  );
}
