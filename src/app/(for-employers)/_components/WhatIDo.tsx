import { Tag, TagList } from "@/components/Tag/Tag";
import styles from "./WhatIDo.module.css";

const SKILLS = [
  {
    title: "Исследую",
    description:
      "Изучаю пользователей, провожу интервью и\u00A0тестирую интерфейсы, чтобы понять, с\u00A0какими проблемами они сталкиваются.",
    tags: ["Interviews", "Usability Testing", "Competitor Analysis"],
  },
  {
    title: "Проектирую",
    description:
      "Продумываю, как пользователь решает свою задачу: от\u00A0последовательности действий до\u00A0готового интерфейса.",
    tags: ["UX/UI", "User Flows", "Information Architecture"],
  },
  {
    title: "Нахожу проблемы",
    description:
      "Разбираю существующий продукт, нахожу неудобные места и\u00A0определяю, что стоит улучшить в\u00A0первую очередь.",
    tags: ["UX Audit", "Heuristic Review", "Product Analysis"],
  },
  {
    title: "Создаю прототипы",
    description:
      "Собираю интерактивные прототипы, чтобы проверить идею и\u00A0сценарий до\u00A0разработки.",
    tags: ["Scenario Testing", "Code-based Prototyping"],
  },
  {
    title: "Работаю с\u00A0данными",
    description:
      "Анализирую поведение пользователей и\u00A0продуктовые метрики, чтобы находить точки роста.",
    tags: ["Product Metrics", "Funnels", "Behavior Analysis"],
  },
  {
    // Текст из макетов 1024 и 375: в макете 1920 здесь продублирован текст карточки «Создаю прототипы».
    title: "Проверяю решения",
    description:
      "Тестирую решения на\u00A0пользователях, разбираю результаты и\u00A0дорабатываю интерфейс на\u00A0основе обратной связи.",
    tags: ["User Testing", "Hypothesis Testing", "Iteration"],
  },
];

export function WhatIDo() {
  return (
    <section className={styles.section} aria-labelledby="skills-title">
      <div className={styles.header}>
        <h2 id="skills-title" className={styles.title}>
          Над&nbsp;чем
          <br className={styles.mobileBreak} /> я&nbsp;работаю
        </h2>
        <p className={styles.subtitle}>
          Исследования, проектирование и&nbsp;проверка гипотез&nbsp;— от&nbsp;понимания задачи до&nbsp;оценки
          результата.
        </p>
      </div>
      <ul className={styles.cards}>
        {SKILLS.map((skill) => (
          <li key={skill.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              ✦
            </span>
            <div className={styles.body}>
              <div className={styles.text}>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <p className={styles.description}>{skill.description}</p>
              </div>
              <TagList>
                {skill.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
