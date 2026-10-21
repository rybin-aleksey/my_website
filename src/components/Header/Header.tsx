import type { ReactNode } from "react";
import { PillLink } from "@/components/PillLink/PillLink";
import { RESUME_URL, TELEGRAM_URL } from "@/lib/contacts";
import styles from "./Header.module.css";

type HeaderProps = {
  /** Левая часть: статус «Открыт к работе» или ссылка «На главную». */
  start: ReactNode;
  /** На мобильных левая часть скрыта, кнопки растягиваются (Nav / Mobile). */
  hideStartOnMobile?: boolean;
  className?: string;
};

export function Header({ start, hideStartOnMobile = false, className }: HeaderProps) {
  return (
    <header
      className={[styles.header, hideStartOnMobile && styles.stretchOnMobile, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.start}>{start}</div>
      <nav className={styles.actions} aria-label="Контакты">
        <PillLink
          href={RESUME_URL}
          variant="secondary"
          size="Responsive"
          external
          className={styles.action}
        >
          Резюме
        </PillLink>
        <PillLink
          href={TELEGRAM_URL}
          size="Responsive"
          withArrow
          external
          className={styles.action}
        >
          Telegram
        </PillLink>
      </nav>
    </header>
  );
}
