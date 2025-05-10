import styles from "./BeltDecoration.module.css";

export const BeltDecoration = ({ x, y, rotation }) => {
  return (
    <div
      className={styles.BeltDecoration}
      style={{
        zIndex: -1,
        top: y,
        left: x,
        transform: `rotate(${rotation})`,
      }}
    />
  );
};
