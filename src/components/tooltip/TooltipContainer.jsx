import React from "react";
import styles from "./TooltipContainer.module.css";

const TooltipContext = React.createContext({});

export const useTooltipContainerRef = () => {
  const { ref } = React.useContext(TooltipContext);
  return ref;
};

export const TooltipContainer = ({ children }) => {
  const ref = React.useRef();

  return (
    <TooltipContext.Provider value={{ ref }}>
      <div ref={ref} className={styles.container} />
      {children}
    </TooltipContext.Provider>
  );
};
