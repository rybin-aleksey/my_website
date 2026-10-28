import { Header } from "@/components/Header/Header";
import { Tag, TagList } from "@/components/Tag/Tag";
import { Avatar } from "./Avatar";
import styles from "./Hero.module.css";
import { ShotsCarousel } from "./ShotsCarousel";

const INDUSTRIES = ["Healthtech", "Fintech", "Edtech", "B2C", "B2B"];

export function HeroHeader() {
  return (
    <div className={styles.headerBg}>
      <Header
        className={styles.header}
        hideStartOnMobile
        start={
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Открыт к&nbsp;работе
          </p>
        }
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <Avatar withBackdrop preload className={styles.avatar} />
        <div className={styles.text}>
          <h1 id="hero-title" className={styles.title}>
            Привет! Я&nbsp;Алексей,
            <br />
            продуктовый дизайнер
          </h1>
          <p className={styles.subtitle}>
            Решаю сложные продуктовые задачи, нахожу понятные и&nbsp;проверенные решения.
          </p>
        </div>
        <TagList className={styles.tags}>
          {INDUSTRIES.map((industry) => (
            <Tag key={industry}>{industry}</Tag>
          ))}
        </TagList>
      </div>
      <ShotsCarousel className={styles.shots} />
    </section>
  );
}
