import React from "react";
import title from "../../../public/text_only.png";
import { BeltDecoration } from "../BeltDecoration";
import { Cta } from "../Cta";
import styles from "./PageContainer.module.css";
import { TooltipContainer } from "../tooltip/TooltipContainer";
import { PageBackground } from "./PageBackground";
import { CrtEffect } from "./CrtEffect";

export default function PageContainer({ children }) {
  return (
    <TooltipContainer>
      <main className={styles.PageContainer}>
        <BeltDecoration
          x="100vw"
          y="calc(100vh - 32px)"
          rotation="90deg"
          distance={3}
        />
        <BeltDecoration
          x="calc(100% - 24px)"
          y="0"
          rotation="0deg"
          distance={2}
        />
        <BeltDecoration
          x="calc(100% - 72px)"
          y="0"
          rotation="0deg"
          distance={2}
        />
        <BeltDecoration
          x="calc(100% - 48px)"
          y="0"
          rotation="0deg"
          distance={0}
        />
        <PageBackground />
        <CrtEffect />
        <BeltDecoration x="15%" y="-20%" rotation="40deg" distance={3} />
        <BeltDecoration x="20%" y="-20%" rotation="40deg" distance={2} />
        <BeltDecoration x="20%" y="-25%" rotation="40deg" />
        {/* <BeltDecoration x="-5%" y="20%" rotation="-40deg" /> */}
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
