import styles from "./TrailerEmbed.module.css";

export const TrailerEmbed = () => {
  return (
    <div className={styles.TrailerEmbed}>
      <div className={styles.TrailerEmbedContent}>
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/kFkxq68oBa4?si=PCwppq8ePJWv6e2p"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{
            width: "50vw",
            aspectRatio: "560/315",
          }}
        />
      </div>
    </div>
  );
};
