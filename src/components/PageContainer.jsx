import React from "react";
import styles from "./PageContainer.module.css";
import title from "../../public/text_only.png";
import { Navigation } from "./Navigation";
import { BeltDecoration } from "./BeltDecoration";
import { Cta } from "./Cta";

export default function PageContainer({ children }) {
  return (
    <main className={styles.PageContainer}>
      <Cta />
      <BeltDecoration x={0} y="-25%" rotation="40deg" />
      <BeltDecoration x="100%" y="calc(100vh - 70%)" rotation="40deg" />
      <img src={title} />
      {children}
      <footer>
        a game by <strong>curried_functor</strong> and <strong>ecaroh</strong>
      </footer>
    </main>
  );
}
