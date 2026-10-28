"use client";

import { useEffect, useState } from "react";
import styles from "./Toc.module.css";

type TocItem = { id: string; label: string };

// Верхняя граница раздела должна пройти эту долю высоты экрана, чтобы он стал активным
const ACTIVATION_LINE = 0.3;

// Оглавление кейса: подсвечивает раздел, который сейчас на экране.
export function Toc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * ACTIVATION_LINE;
      // Последний раздел, чей верх уже выше линии активации
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      if (current) setActiveId(current.id);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <nav className={styles.toc} aria-label="Содержание кейса">
      <ul className={styles.list}>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={styles.link}
              aria-current={activeId === id ? "location" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
