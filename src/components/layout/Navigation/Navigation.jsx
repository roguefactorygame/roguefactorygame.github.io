import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Link className={styles.Link} to="/">
        Home
      </Link>
      <Link className={styles.Link} to="/recipes">
        Recipes
      </Link>
    </nav>
  );
};
