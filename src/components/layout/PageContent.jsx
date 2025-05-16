import { Navigation } from "./Navigation/Navigation";
import styles from "./PageContent.module.css";

export const PageContent = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className={styles.PageContent}>
        <div style={{ position: "relative", flexGrow: 1 }}>{children}</div>
      </div>
    </>
  );
};
