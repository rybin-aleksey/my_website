import { PillLink } from "@/components/PillLink/PillLink";
import { StarList } from "@/components/StarList/StarList";
import { RESUME_URL } from "@/lib/contacts";
import styles from "./Experience.module.css";

const JOBS = [
  {
    title: "Web Designer · Karanikola Studio",
    period: "Август 2025 — Сентябрь 2026",
    responsibilities: [
      "Создавал дизайн-концепции сайтов;",
      "Делал внутренние страницы и поддерживал сайты;",
      "Создавал презентации проектов;",
    ],
    note: "Работал в команде разработки, взаимодействовал с разработчиками и Project-менеджером.",
  },
  {
    title: "Digital Designer · BlackOne",
    period: "Октябрь 2024 — Июль 2025",
    responsibilities: [
      "Создавал сопроводительную визуальную коммуникацию для брендов;",
      "Изучил предметную область заказчиков и разрабатывал дизайн-макеты для баннеров и постов по требованиям и гайдлайнам;",
    ],
    note: "Задачи приходили из главного офиса. Работал в команде из 3 дизайнеров, вёл коммуникацию с Заказчиком через Project-manager.",
  },
];

export function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={styles.intro}>
        <div className={styles.heading}>
          <h2 id="experience-title" className={styles.title}>
            Опыт и проекты
          </h2>
          <p className={styles.description}>
            Мой путь в дизайне, ключевые проекты и зоны ответственности.
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
