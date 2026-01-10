import styles from "./PageBackground.module.css";

export const PageBackground = () => {
  return (
    <div className={styles.PageBackgroundOverlay}>
      <div className={styles.PageBackground} />
    </div>
  );
};
