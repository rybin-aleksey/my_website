import Image from "next/image";
import styles from "./Avatar.module.css";

type AvatarProps = {
  /** Повёрнутая подложка за фото (есть только в hero). */
  withBackdrop?: boolean;
  preload?: boolean;
};

export function Avatar({ withBackdrop = false, preload = false }: AvatarProps) {
  const card = (
    <div className={styles.card}>
      <Image
        src="/images/avatar.png"
        alt="Алексей Рыбин"
        width={216}
        height={254}
        sizes="216px"
        preload={preload}
        className={styles.photo}
      />
      <Image
        src="/images/avatar-glow.svg"
        alt=""
        width={519}
        height={216}
        className={styles.glow}
      />
    </div>
  );

  if (!withBackdrop) return card;

  return (
    <div className={styles.withBackdrop}>
      <div className={styles.backdrop} aria-hidden="true" />
      {card}
    </div>
  );
}
