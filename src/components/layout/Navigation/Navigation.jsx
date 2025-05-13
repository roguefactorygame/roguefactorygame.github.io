import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const links = [
  ["/", "Home"],
  ["/recipes", "Recipes"],
  ["/docs/recipes/fireball", "Wiki"],
];

export const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      {links.map(([to, label], index) => (
        <Link className={styles.Link} key={index} to={to}>
          {label}
        </Link>
      ))}
    </nav>
  );
}