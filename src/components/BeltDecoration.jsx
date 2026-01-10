import styles from "./BeltDecoration.module.css";

export const BeltDecoration = ({ x, y, rotation, distance = 0 }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: -1,
        top: y,
        left: x,
        transform: `rotate(${rotation})`,
        ...(distance > 0 && {
          filter: `blur(${distance}px)`,
          opacity: 1 - distance / 10,
        }),
      }}
    >
      <div className={styles.BeltDecoration} />
    </div>
  );
};
