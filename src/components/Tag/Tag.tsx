import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
  children: ReactNode;
  /**
   * sm — теги в карточке кейса (масштаб 90% в макете),
   * md — hero и карточки навыков,
   * lg — обложка кейса (Tag / Size=Large).
   */
  size?: "sm" | "md" | "lg";
};

export function Tag({ children, size = "md" }: TagProps) {
  return <li className={`${styles.tag} ${styles[size]}`}>{children}</li>;
}

type TagListProps = {
  children: ReactNode;
  className?: string;
};

export function TagList({ children, className }: TagListProps) {
  return <ul className={`${styles.list} ${className ?? ""}`}>{children}</ul>;
}
