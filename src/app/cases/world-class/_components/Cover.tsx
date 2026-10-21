import Image from "next/image";
import { Tag, TagList } from "@/components/Tag/Tag";
import styles from "./Cover.module.css";

// Ссылка на презентацию кейса. В макете есть кнопка «Смотреть презентацию»,
// но самой презентации нет — пока URL не задан, блок не кликабелен.
const PRESENTATION_URL: string | null = null;

export function Cover() {
  const videoContent = (
    <>
      <span className={styles.play} aria-hidden="true">
        <Image src="/icons/play.svg" alt="" width={24} height={24} />
      </span>
      <span>Смотреть презентацию</span>
    </>
  );

  return (
    <section className={styles.cover} aria-labelledby="case-title">
      <Image
        src="/images/cases/world-class/cover-grid.png"
        alt=""
        width={1180}
        height={275}
        sizes="1180px"
        className={styles.grid}
        preload
      />
      <div className={styles.logo}>
        <Image src="/images/cases/world-class/logo-cover.svg" alt="" width={90} height={90} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleGroup}>
          <h1 id="case-title" className={styles.title}>
            World Class
          </h1>
          <p className={styles.description}>
            Редизайн мобильного приложения премиальной сети фитнес-клубов
          </p>
        </div>
        <TagList>
          <Tag size="lg">Фитнес</Tag>
          <Tag size="lg">B2C</Tag>
          <Tag size="lg">Mobile app</Tag>
        </TagList>
      </div>
      {PRESENTATION_URL ? (
        <a
          href={PRESENTATION_URL}
          className={styles.video}
          target="_blank"
          rel="noopener noreferrer"
        >
          {videoContent}
        </a>
      ) : (
        <div className={styles.video}>{videoContent}</div>
      )}
      <div className={styles.visual}>
        <Image
          src="/images/cases/world-class/cover-app.png"
          alt="Главный экран нового приложения World Class"
          width={366}
          height={588}
          sizes="366px"
          preload
          className={styles.app}
        />
        <Image
          src="/images/cases/world-class/cover-club-card.svg"
          alt=""
          width={421}
          height={204}
          className={styles.clubCard}
        />
      </div>
    </section>
  );
}
