import styles from "./BeltDecoration.module.css";

export const BeltDecoration = ({ x, y, rotation, distance = 0 }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: -2,
        top: y,
        left: x,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        transform: `rotate(${rotation})`,
        ...(distance > 0 && {
          filter: `blur(${distance}px) brightness(${Math.max(
            100 - distance ** 1.5 * 15,
            30
          )}%)`,
        }),
      }}
    >
      <div
        className={styles.BeltDecoration}
        style={{
          animationDuration: `${1.5 + distance}s`,
        }}
      />
    </div>
  );
};
