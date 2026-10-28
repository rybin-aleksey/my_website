"use client";

import Image from "next/image";
import { useRef } from "react";
import { useMarquee } from "@/lib/useMarquee";
import styles from "./ShotsCarousel.module.css";

// Картинки — кадры из секции шотов в Figma (910:5339), 4:3
const SHOTS = [
  { title: "Платформа обучения", project: "Neural UI", image: "/images/shots/platform.png" },
  { title: "Аналитика обучения", project: "Neural UI", image: "/images/shots/analytics.png" },
  {
    title: "Персонализация платформы",
    project: "Neural UI",
    image: "/images/shots/personalization.png",
  },
  { title: "Надёжность и безопасность", project: "Neural UI", image: "/images/shots/security.png" },
];

// Три копии: одна пачка (4 × 419px) уже экрана 1920
const COPIES = 3;
const ITEMS = Array.from({ length: COPIES }, () => SHOTS).flat();

// Скорость движения, px в секунду — как у карусели экранов в кейсе
const SPEED = 28;

type ShotsCarouselProps = {
  className?: string;
};

// Бесконечная лента шотов под hero (см. useMarquee).
// При наведении на карточку над ней появляется картинка шота.
export function ShotsCarousel({ className }: ShotsCarouselProps) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  useMarquee(rootRef, trackRef, SPEED);

  return (
    <section
      ref={rootRef}
      className={[styles.carousel, className].filter(Boolean).join(" ")}
      aria-label="Шоты"
      tabIndex={0}
    >
      <ul ref={trackRef} className={styles.track}>
        {ITEMS.map((shot, index) => {
          const isCopy = index >= SHOTS.length;
          return (
            <li
              key={index}
              className={`${styles.item} ${isCopy ? styles.copy : ""}`}
              aria-hidden={isCopy || undefined}
            >
              <span className={styles.icon} aria-hidden="true">
                ✦
              </span>
              <span className={styles.text}>
                <span className={styles.title}>{shot.title}</span>
                <span className={styles.project}>{shot.project}</span>
              </span>
              <Image
                src={shot.image}
                alt={isCopy ? "" : `${shot.title} — ${shot.project}`}
                width={573}
                height={430}
                sizes="573px"
                loading="eager"
                className={styles.preview}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
