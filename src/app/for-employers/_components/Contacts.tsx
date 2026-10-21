import { PillLink } from "@/components/PillLink/PillLink";
import { EMAIL, RESUME_URL, TELEGRAM_HANDLE, TELEGRAM_URL } from "@/lib/contacts";
import { Avatar } from "./Avatar";
import styles from "./Contacts.module.css";

export function Contacts() {
  return (
    <section className={styles.section} aria-labelledby="contacts-title">
      <div className={styles.photo}>
        <Avatar />
        <p className={styles.caption}>
          Буду рад обсудить вашу вакансию и рассказать о своём опыте.
        </p>
      </div>
      <div className={styles.contacts}>
        <div className={styles.info}>
          <h2 id="contacts-title" className={styles.title}>
            Ищете продуктового дизайнера в команду?
          </h2>
          <dl className={styles.channels}>
            <div className={styles.channel}>
              <dt>Telegram:</dt>
              <dd>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {TELEGRAM_HANDLE}
                </a>
              </dd>
            </div>
            <div className={styles.channel}>
              <dt>Email:</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={styles.actions}>
          <PillLink href={TELEGRAM_URL} withArrow external className={styles.action}>
            Написать в Telegram
          </PillLink>
          <PillLink href={RESUME_URL} variant="secondary" external className={styles.action}>
            Смотреть резюме
          </PillLink>
        </div>
      </div>
    </section>
  );
}
