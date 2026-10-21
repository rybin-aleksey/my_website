import { Header } from "@/components/Header/Header";
import { Tag, TagList } from "@/components/Tag/Tag";
import { Avatar } from "./Avatar";
import styles from "./Hero.module.css";

const INDUSTRIES = ["Healthtech", "Fintech", "Edtech", "B2C", "B2B"];

export function HeroHeader() {
  return (
    <div className={styles.headerBg}>
      <Header
        hideStartOnMobile
        start={
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Открыт к работе
          </p>
        }
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Avatar withBackdrop preload />
      <div className={styles.text}>
        <h1 id="hero-title" className={styles.title}>
          Привет! Я Алексей,
          <br />
          продуктовый дизайнер
        </h1>
        <p className={styles.subtitle}>
          Решаю сложные продуктовые задачи, нахожу понятные и проверенные решения.
        </p>
      </div>
      <TagList className={styles.tags}>
        {INDUSTRIES.map((industry) => (
          <Tag key={industry}>{industry}</Tag>
        ))}
      </TagList>
    </section>
  );
}
