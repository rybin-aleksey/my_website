import { PillLink } from "@/components/PillLink/PillLink";
import { StarList } from "@/components/StarList/StarList";
import { RESUME_URL } from "@/lib/contacts";
import styles from "./Experience.module.css";

const JOBS = [
  {
    title: "Web Designer · Karanikola Studio",
    period: "Август 2025\u00A0— Сентябрь 2026",
    responsibilities: [
      "Создавал дизайн-концепции сайтов;",
      "Делал внутренние страницы и\u00A0поддерживал сайты;",
      "Создавал презентации проектов;",
    ],
    note: "Работал в\u00A0команде разработки, взаимодействовал с\u00A0разработчиками и\u00A0Project-менеджером.",
  },
  {
    title: "Digital Designer · BlackOne",
    period: "Октябрь 2024\u00A0— Июль 2025",
    responsibilities: [
      "Создавал сопроводительную визуальную коммуникацию для\u00A0брендов;",
      "Изучил предметную область заказчиков и\u00A0разрабатывал дизайн-макеты для\u00A0баннеров и\u00A0постов по\u00A0требованиям и\u00A0гайдлайнам;",
    ],
    note: "Задачи приходили из\u00A0главного офиса. Работал в\u00A0команде из\u00A03\u00A0дизайнеров, вёл коммуникацию с\u00A0Заказчиком через Project-manager.",
  },
];

export function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={styles.intro}>
        <div className={styles.heading}>
          <h2 id="experience-title" className={styles.title}>
            Опыт и&nbsp;проекты
          </h2>
          <p className={styles.description}>
            Мой путь в&nbsp;дизайне, ключевые проекты и&nbsp;зоны ответственности.
          </p>
        </div>
        <PillLink href={RESUME_URL} variant="secondary" external>
          Смотреть резюме
        </PillLink>
      </div>
      <ul className={styles.jobs}>
        {JOBS.map((job) => (
          <li key={job.title} className={styles.job}>
            <div className={styles.jobHeader}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.period}>{job.period}</p>
            </div>
            <StarList items={job.responsibilities} className={styles.responsibilities} />
            <p className={styles.note}>{job.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
