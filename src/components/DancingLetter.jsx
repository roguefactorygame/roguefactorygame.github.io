import React from "react";
import styles from "./DancingLetter.module.css";

export const DancingLetter = ({ children, index }) => {
  const [rot] = React.useState(Math.random() - 0.5);
  if (children == " ") {
    return <>&nbsp;</>;
  }
  return (
    <span
      className={styles.DancingLetter}
      style={{
        animationDelay: `${index * 30}ms`,
      }}
    >
      <span
        style={{ display: "inline-block", transform: `rotate(${rot * 10}deg)` }}
      >
        {children}
      </span>
    </span>
  );
};
