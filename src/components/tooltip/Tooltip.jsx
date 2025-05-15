import ReactDOM from "react-dom";
import React from "react";
import { useTooltipContainerRef } from "./TooltipContainer";
import styles from "./Tooltip.module.css";

export const Tooltip = ({ children }) => {
  const ref = useTooltipContainerRef();
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    let rafId;
    const pos = { x: 0, y: 0 };
    const updateMousePos = () => {
      setMousePos({ ...pos });
      rafId = requestAnimationFrame(updateMousePos);
    };

    const eventHandler = (evt) => {
      pos.x = evt.pageX;
      pos.y = evt.pageY;
    };

    document.addEventListener("mousemove", eventHandler);
    updateMousePos();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", eventHandler);
    };
  }, []);

  if (!ref.current) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={styles.tooltip}
      style={{
        left: mousePos.x,
        top: mousePos.y,
      }}
    >
      {children}
    </div>,
    ref.current
  );
};
