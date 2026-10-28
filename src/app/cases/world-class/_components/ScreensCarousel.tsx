"use client";

import Image from "next/image";
import { useRef } from "react";
import { useMarquee } from "@/lib/useMarquee";
import styles from "./ScreensCarousel.module.css";

const SCREENS = [
  { src: "/images/cases/world-class/carousel-1.png", alt: "Экран «Описание карты»" },
  { src: "/images/cases/world-class/carousel-2.png", alt: "Экран с картой клубов" },
  { src: "/images/cases/world-class/carousel-3.png", alt: "Экран клуба Red Side" },
  { src: "/images/cases/world-class/carousel-4.png", alt: "Экран «Оформить карту клуба»" },
  { src: "/images/cases/world-class/carousel-5.png", alt: "Экран выбора времени и даты" },
  { src: "/images/cases/world-class/carousel-6.png", alt: "Экран «Календарь» с записью на тренировку" },
  { src: "/images/cases/world-class/carousel-7.png", alt: "Экран «История операций»" },
  { src: "/images/cases/world-class/carousel-8.png", alt: "Экран авансового счёта и набора услуг" },
];

// Две копии, чтобы лента была заметно шире любого экрана
const ITEMS = [...SCREENS, ...SCREENS];

// Скорость движения, px в секунду
const SPEED = 28;

// Бесконечная лента экранов приложения (см. useMarquee)
export function ScreensCarousel() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  useMarquee(rootRef, trackRef, SPEED);

  return (
    <section
      ref={rootRef}
      className={styles.carousel}
      aria-label="Экраны приложения"
      tabIndex={0}
    >
      <ul ref={trackRef} className={styles.track}>
        {ITEMS.map((screen, index) => {
          const isCopy = index >= SCREENS.length;
          return (
            <li
              key={index}
              className={`${styles.item} ${isCopy ? styles.copy : ""}`}
              aria-hidden={isCopy || undefined}
            >
              <Image
                src={screen.src}
                alt={isCopy ? "" : screen.alt}
                width={201.75}
                height={417.5}
                sizes="202px"
                loading="eager"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
