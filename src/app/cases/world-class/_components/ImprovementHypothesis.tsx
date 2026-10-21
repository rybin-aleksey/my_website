import styles from "./ImprovementHypothesis.module.css";

type ImprovementHypothesisProps = {
  context: string;
  hypothesis: string;
  metrics: string[];
  improvements: string[];
};

// Продуктовая гипотеза: контекст, формулировка, метрики и возможные улучшения.
export function ImprovementHypothesis({
  context,
  hypothesis,
  metrics,
  improvements,
}: ImprovementHypothesisProps) {
  return (
    <dl className={styles.card}>
      <div className={styles.group}>
        <dt className={styles.label}>Контекст</dt>
        <dd>{context}</dd>
      </div>
      <div className={styles.group}>
        <dt className={`${styles.label} ${styles.accent}`}>Гипотеза</dt>
        <dd>{hypothesis}</dd>
      </div>
      <div className={styles.group}>
        <dt className={styles.label}>Метрики</dt>
        {metrics.map((metric) => (
          <dd key={metric}>— {metric}</dd>
        ))}
      </div>
      <div className={styles.group}>
        <dt className={styles.label}>Возможные улучшения</dt>
        {improvements.map((improvement) => (
          <dd key={improvement}>— {improvement}</dd>
        ))}
      </div>
    </dl>
  );
}
