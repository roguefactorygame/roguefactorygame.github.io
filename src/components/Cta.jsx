import styles from "./Cta.module.css";

export const Cta = () => {
  return (
    <div className={styles.Cta}>
      <a
        className="button-primary"
        href="https://store.steampowered.com/app/3212630/Rogue_Factory/"
        target="_blank"
      >
        Wishlist on Steam!
      </a>
      <a
        className="button-primary"
        href="https://discord.gg/dfC3uJNatz"
        target="_blank"
      >
        Join the Discord!
      </a>
    </div>
  );
};
