import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/Tonysoossa"
        target="blank"
      >
        Visit Github:
      </a>
    </div>
  );
}
