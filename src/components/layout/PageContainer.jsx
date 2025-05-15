import React from "react";
import title from "../../../public/text_only.png";
import { BeltDecoration } from "../BeltDecoration";
import { Cta } from "../Cta";
import styles from "./PageContainer.module.css";
import { TooltipContainer } from "../tooltip/TooltipContainer";

export default function PageContainer({ children }) {
  return (
    <TooltipContainer>
      <main className={styles.PageContainer}>
        <BeltDecoration x={0} y="-25%" rotation="40deg" />
        <BeltDecoration x="100%" y="calc(100vh - 70%)" rotation="40deg" />
        <img src={title} />
        <Cta />
        {children}
        <footer>
          a game by <strong>curried_functor</strong> and <strong>ecaroh</strong>
        </footer>
      </main>
    </TooltipContainer>
  );
}
