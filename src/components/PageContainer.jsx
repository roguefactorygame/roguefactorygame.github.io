import React from "react";
import styles from "./PageContainer.module.css";
import title from "../../public/text_only.png";
import { Navigation } from "./Navigation";

export default function PageContainer({ children }) {
  return (
    <main className={styles.PageContainer}>
      <img src={title} />
      <Navigation />
      {children}
    </main>
  );
}
