import Image from "next/image";
import Link from "next/link";
import { PAGE_FADE } from "@/components/PageTransition/PageTransition";
import { Tag, TagList } from "@/components/Tag/Tag";
import styles from "./Cases.module.css";

export function Cases() {
  return (
    <section className={styles.section} aria-labelledby="cases-title">
      <h2 id="cases-title" className={styles.title}>
        Продуктовые кейсы
      </h2>
      <article className={styles.card}>
        <Image
          src="/images/cases/world-class/card-grid.svg"
          alt=""
          width={1524}
          height={296}
          className={styles.grid}
        />
        <Image
          src="/images/cases/world-class/card-screens.webp"
          alt=""
          width={486}
          height={356}
          sizes="486px"
          className={styles.screens}
        />
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <Image
                src="/images/cases/world-class/logo.svg"
                alt=""
                width={70.25}
                height={70.24}
              />
            </div>
            <div className={styles.info}>
              <div className={styles.text}>
                <h3 className={styles.name}>World Class</h3>
                <p className={styles.description}>
                  Редизайн мобильного приложения премиальной сети фитнес-клубов
                </p>
              </div>
              <TagList className={styles.tags}>
                <Tag size="sm">Fintech</Tag>
                <Tag size="sm">B2C</Tag>
                <Tag size="sm">Web</Tag>
              </TagList>
            </div>
          </div>
          <Link
            href="/cases/world-class"
            transitionTypes={[PAGE_FADE]}
            className={styles.link}
          >
            <span className={styles.linkLabel}>Смотреть кейс</span>
            <span className="visually-hidden"> World Class</span>
          </Link>
        </div>
      </article>
    </section>
  );
}
