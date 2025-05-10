import React from "react";
import styles from "./PageContainer.module.css";
import title from "../../public/text_only.png";

export default function PageContainer({ children }) {
  return (
    <main className={styles.PageContainer}>
      <img src={title} />
      {children}
    </main>
  );
}
