import { Navigation } from "./Navigation/Navigation";
import styles from "./PageContent.module.css";

export const PageContent = ({ children }) => {
  return (
    <div className={styles.PageContent}>
      <Navigation />
      <div style={{ position: "relative", flexGrow: 1 }}>{children}</div>
    </div>
  );
};
