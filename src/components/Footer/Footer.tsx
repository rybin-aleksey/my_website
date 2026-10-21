import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© 2026</p>
        <p>Алексей Рыбин</p>
      </div>
    </footer>
  );
}
