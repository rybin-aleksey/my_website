import type { ReactNode } from "react";
import styles from "./StarList.module.css";

type StarListProps = {
  items: ReactNode[];
  className?: string;
};

// Список с маркером ✦ (Case / List Item и пункты обязанностей в опыте).
export function StarList({ items, className }: StarListProps) {
  return (
    <ul className={`${styles.list} ${className ?? ""}`}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <span className={styles.bullet} aria-hidden="true">
            ✦
          </span>
          <span className={styles.text}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
