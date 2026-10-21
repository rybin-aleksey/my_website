import Image from "next/image";
import styles from "./ScreensCarousel.module.css";

const SCREENS = [
  { src: "/images/cases/world-class/screen-1.png", alt: "Экран «Описание карты»" },
  { src: "/images/cases/world-class/screen-2.png", alt: "Экран с картой клубов" },
  { src: "/images/cases/world-class/screen-3.png", alt: "Экран клуба Red Side" },
  { src: "/images/cases/world-class/screen-4.png", alt: "Экран «Оформить карту клуба»" },
  { src: "/images/cases/world-class/screen-5.png", alt: "Экран выбора времени и даты" },
];

// Лента экранов приложения. Прокручивается нативно (тач, трекпад, клавиатура).
export function ScreensCarousel() {
  return (
    <section
      className={styles.carousel}
      aria-label="Экраны приложения"
      tabIndex={0}
    >
      <ul className={styles.track}>
        {SCREENS.map((screen) => (
          <li key={screen.src} className={styles.item}>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={201.75}
              height={417.5}
              sizes="202px"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
