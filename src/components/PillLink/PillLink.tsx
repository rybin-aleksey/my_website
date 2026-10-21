import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./PillLink.module.css";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "L" | "M" | "Responsive";
  /** Иконка стрелки ↗ (в макете — только у primary-кнопок внешних ссылок). */
  withArrow?: boolean;
  /** Открывать в новой вкладке (внешние ссылки, PDF). */
  external?: boolean;
  className?: string;
};

// Button / Pill из UI-kit. Все кнопки в макетах — навигационные, поэтому это ссылка.
export function PillLink({
  href,
  children,
  variant = "primary",
  size = "L",
  withArrow = false,
  external = false,
  className,
}: PillLinkProps) {
  const classes = [
    styles.pill,
    styles[variant],
    styles[`size${size}`],
    withArrow && styles.withArrow,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <Image
          src="/icons/arrow-up-right.svg"
          alt=""
          width={24}
          height={24}
          className={styles.icon}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
