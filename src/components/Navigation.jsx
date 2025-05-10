import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav
      style={{
        maxWidth: 320,
        margin: "0 auto",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/docs/recipes/fireball">Docs</Link>
    </nav>
  );
};
