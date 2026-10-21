import Image from "next/image";
import styles from "./HypothesisCard.module.css";

type HypothesisCardProps = {
  title: string;
  hypothesis: string;
  result: string;
  status: "confirmed" | "rejected";
};

// Карточка гипотезы исследования (Status=Confirmed / Status=Rejected).
export function HypothesisCard({ title, hypothesis, result, status }: HypothesisCardProps) {
  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <Image
        src={`/icons/status-${status}.svg`}
        alt=""
        width={20}
        height={26}
        className={styles.status}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p>{hypothesis}</p>
        </div>
        <p className={styles.badge}>{result}</p>
      </div>
    </div>
  );
}
