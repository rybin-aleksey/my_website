import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { StarList } from "@/components/StarList/StarList";
import { Cover } from "./_components/Cover";
import { HypothesisCard } from "./_components/HypothesisCard";
import { ImprovementHypothesis } from "./_components/ImprovementHypothesis";
import { ScreensCarousel } from "./_components/ScreensCarousel";
import { Toc } from "./_components/Toc";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Кейс World Class",
  description: "Редизайн мобильного приложения премиальной сети фитнес-клубов World Class.",
};

const TOC_ITEMS = [
  { id: "about", label: "О компании" },
  { id: "research", label: "Поиск и валидация проблем" },
  { id: "hypotheses", label: "Гипотезы по улучшению" },
  { id: "solution", label: "Проработка решения" },
  { id: "ux-tests", label: "UX-тесты" },
];

export default function WorldClassCasePage() {
  return (
    <>
      <Header
        className={styles.header}
        start={
          <Link href="/for-employers" className={styles.backLink}>
            <Image src="/icons/back.svg" alt="" width={24} height={24} />
            <span className={styles.backLabel}>На главную</span>
          </Link>
        }
      />

      <main className={styles.main}>
        <Cover />

        <div className={styles.content}>
          <aside className={styles.tocSlot}>
            <Toc items={TOC_ITEMS} />
          </aside>

          {/* О компании */}
          <section id="about" className={`${styles.narrow} ${styles.intro}`}>
            <div className={styles.block}>
              <h2 className={styles.h1}>О компании</h2>
              <div className={styles.body}>
                <p>
                  World Class — крупнейшая премиальная сеть фитнес-клубов, которой доверяют
                  десятки тысяч клиентов. Приложение играет роль «входной точки»
                  в фитнес-экосистему: запись на тренировки, покупка абонементов,
                  рекомендации, доступ в клуб.
                </p>
                <p>
                  Однако несмотря на богатый функционал, продукт страдал от перегруженности,
                  фрагментированной навигации и низкой прозрачности условий. Это снижало
                  вовлечённость и напрямую влияло на транзакции (записи, покупки, продления).
                </p>
              </div>
            </div>
            <div className={styles.listBlock}>
              <div className={styles.block}>
                <h3 className={styles.h2}>Цели, которые я себе ставил</h3>
                <p className={styles.body}>
                  Опираясь на аналитику пользовательских опросов и интервью, я сформировал три
                  ключевые цели:
                </p>
              </div>
              <StarList
                className={styles.gap16}
                items={[
                  "Снизить когнитивную нагрузку при выборе тренировок и тренеров.",
                  "Увеличить продажи карт и абонементов внутри приложения.",
                  "Снизить нагрузку на ресепшн, переведя операции в цифровые сценарии.",
                ]}
              />
            </div>
          </section>

          <hr className={styles.divider} />

          {/* Поиск и валидация проблем */}
          <section id="research" className={`${styles.narrow} ${styles.section}`}>
            <h2 className={styles.sectionTitle}>Поиск и валидация проблем</h2>
            <div className={styles.subsections}>
              <div className={styles.block}>
                <h3 className={styles.h2}>Оценка текущего сценария</h3>
                <div className={styles.body}>
                  <p>
                    Текущий сценарий приложения World Class выглядит функционально богатым
                    и старается перенести почти весь офлайн‑опыт клуба в мобильный формат:
                    расписание, запись, абонементы, доп. услуги, заморозка, уведомления и т.д.
                    При этом основное впечатление такое:
                  </p>
                  <p>
                    Расписание выстроено логично, но есть риск перегрузки пользователя:
                    сложная навигация, множество статусов и ограничений, которые не всегда
                    очевидны. Приложение больше похоже на «интерфейс регламентов сети клубов»,
                    чем на максимально простой сервис под 2–3 ключевые задачи пользователя.
                  </p>
                  <p>
                    Главная зона роста — упростить и «вычистить» критические сценарии (просмотр
                    расписания, запись, покупка абонемента), скрыв сложность бизнес‑логики за
                    понятными статусами, минимальным количеством шагов и более прямой
                    навигацией.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <div className={styles.block}>
                  <h3 className={styles.h2}>Конкурентный анализ</h3>
                  <p className={styles.body}>
                    В процессе конкурентного анализа приложений конкурентов я пришёл
                    к следующим ключевым инсайтам:
                  </p>
                </div>
                <StarList
                  className={styles.gap20}
                  items={[
                    "Расписание, запись, профиль, абонемент, клубы — это «обязательная программа». На этом нельзя дифференцироваться, но можно терять деньги, если сделать хуже рынка.",
                    <>
                      Конкуренты выигрывают за счёт UX и перехода к персональному опыту.
                      <br />— Меньше шагов, меньше служебных экранов.
                      <br />— Больше контекста и рекомендаций.
                      <br />— По большей части экран не витрина, а дашборд.
                    </>,
                    "Абонементы и платежи — недоиспользованный канал роста. Необходимо упростить покупку/продление. Встроить их в реальные сценарии (нет доступа → предложить апгрейд). Информировать о статусе на главном экране.",
                    "Рекомендации, челленджи, онлайн‑тренировки. Пользователь ожидает что ему будут давать возможность активно развиваться, а не просто продавать сервис.",
                  ]}
                />
              </div>

              <div className={styles.block}>
                <h3 className={styles.h2}>Исследование</h3>
                <p className={styles.body}>
                  Чтобы определить ключевые точки роста, я провёл двухэтапное исследование,
                  комбинируя качественные и количественные методы.
                </p>
              </div>

              <div className={styles.listBlock}>
                <div className={styles.block}>
                  <h3 className={styles.h2}>Качественный этап</h3>
                  <p className={styles.body}>
                    5 UX-тестов текущего сценария сразу выявили критические барьеры:
                  </p>
                </div>
                <div className={styles.hypothesisGroups}>
                  <div className={styles.listBlock}>
                    <HypothesisCard
                      status="confirmed"
                      title="Гипотеза №1"
                      hypothesis="«Пользователь не может легко записаться на тренировку или найти групповые тренировки/тренера»"
                      result="Подтвердилась 5/5"
                    />
                    <StarList
                      items={[
                        "Непонятно, где искать тренировки.",
                        "Нет уверенности, что запись прошла.",
                        "Разница между персональными и групповыми тренировками неочевидна.",
                      ]}
                    />
                  </div>
                  <div className={styles.listBlock}>
                    <HypothesisCard
                      status="confirmed"
                      title="Гипотеза №2"
                      hypothesis="«Пользователю непонятна разница между тарифными планами в клубной карте и какие услуги входят в клубную карту»"
                      result="Подтвердилась 4/5"
                    />
                    <StarList
                      items={[
                        "Участники не могли понять что входит в карту, чем отличаются тарифы, какие услуги будут доступны.",
                        "Нет сравнения карт.",
                        "Пользователи пробуют купить карту не из того раздела.",
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.listBlock}>
                <div className={`${styles.block} ${styles.gap16}`}>
                  <h3 className={styles.h2}>Количественный этап — 85 ответов</h3>
                  <p className={styles.body}>
                    Результаты количественного опроса полностью подтвердили выводы тестов:
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.stat}>
                    <p className={styles.statValue}>60%+</p>
                    <p>пользователей не понимают условия своей карты.</p>
                  </div>
                  <StarList
                    items={[
                      "Большинство испытывают сложности с записью на тренировки.",
                      "Большинство испытывают сложности с записью на тренировки. Карточки тренеров выглядят формальными и не помогают выбрать специалиста.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* Гипотезы по улучшению */}
          <section id="hypotheses" className={`${styles.narrow} ${styles.section}`}>
            <div className={styles.block}>
              <h2 className={styles.sectionTitle}>Гипотезы по улучшению</h2>
              <p className={styles.body}>
                На основе подтверждённых проблем я сформировал продуктовые гипотезы,
                направленные на улучшение ключевых сценариев и увеличение вовлечённости:
              </p>
            </div>
            <div className={styles.cards24}>
              <ImprovementHypothesis
                context="Большинство не понимает, что входит в стоимость карты, и узнаёт это уже на месте или у менеджера."
                hypothesis="Если явно указать, какие услуги включены в карту, а какие нет, то снизится количество обращений к сотрудникам и негатива."
                metrics={[
                  "Количество обращений в поддержку по тарифам",
                  "Конверсия в покупку карты",
                  "Уровень клиентской удовлетворённости (NPS)",
                ]}
                improvements={[
                  "Сравнительная таблица «карта vs. наборы услуг» в карточке клуба.",
                  "Явные бейджи «Включено» / «Дополнительно оплачивается».",
                  "Раздел FAQ по карте — доступный из сценария покупки.",
                ]}
              />
              <ImprovementHypothesis
                context="Люди не могут записаться на персональные тренировки — кнопки нет, интерфейс неочевиден. Информация о тренерах не соответствует цели тренировок."
                hypothesis="Если при выборе цели тренировки выдавать релевантных тренеров и добавить явную кнопку «Записаться», то повысится конверсия в персональные тренировки."
                metrics={["Конверсия в персональные тренировки"]}
                improvements={[
                  "Рекомендации тренеров по цели (например: «хочу похудеть» → тренеры, специализирующиеся на fat loss).",
                  "Отзывы и результаты клиентов (до/после) для оценки релевантности.",
                ]}
              />
            </div>
          </section>

          <hr className={styles.divider} />

          {/* Проработка решения */}
          <section id="solution" className={styles.wideSection}>
            <div className={`${styles.narrow} ${styles.section}`}>
              <h2 className={styles.sectionTitle}>
                Проработка решения,
                <br />
                первая версия макетов
              </h2>
              <div className={styles.block}>
                <h3 className={styles.h2}>«Happy-path» сценарий пути пользователя</h3>
                <StarList
                  items={[
                    "Максимально уменьшил количество шагов.",
                    "Добавил объяснение причин отказа (“нет доступа к тренировке“ → CTA покупки карты).",
                    "Понятный и короткий сценарий покупки.",
                  ]}
                />
              </div>
            </div>
            <div
              className={styles.scrollable}
              tabIndex={0}
              role="region"
              aria-label="User flow: happy-path сценарий"
            >
              <Image
                src="/images/cases/world-class/user-flow.png"
                alt="User flow happy-path сценария: от главного экрана до записи на тренировку и покупки карты"
                width={1180}
                height={560}
                sizes="(min-width: 1260px) 1180px, 100vw"
                className={styles.userFlow}
              />
            </div>
          </section>

          {/* UX-тесты */}
          <section id="ux-tests" className={styles.wideSection}>
            <div className={`${styles.narrow} ${styles.section}`}>
              <div className={styles.block}>
                <h2 className={styles.sectionTitle}>UX-тесты</h2>
                <p className={styles.body}>Гипотезы, которые я сформировал для UX-тестов:</p>
              </div>
              <div className={styles.cards16}>
                <HypothesisCard
                  status="confirmed"
                  title="Гипотеза №1"
                  hypothesis="«Пользователь понимает: как выбрать подходящего тренера, как записаться на тренировку, как отредактировать/отменить запись»"
                  result="Подтвердилась 5/5"
                />
                <HypothesisCard
                  status="confirmed"
                  title="Гипотеза №2"
                  hypothesis="«Пользователь воспринимает новый формат отзывов как более реалистичный и вызывает доверие»"
                  result="Подтвердилась 4/5"
                />
                <HypothesisCard
                  status="rejected"
                  title="Гипотеза №3"
                  hypothesis="«Пользователю легко понять различия между типами клубных карт и включёнными услугами»"
                  result="Не подтвердилась 1/5"
                />
              </div>
            </div>

            <div className={styles.scenario}>
              <div className={`${styles.narrow} ${styles.block}`}>
                <h3 className={styles.h2}>Сценарии записи на тренировку</h3>
                <div className={styles.body}>
                  <p>Респонденты успешно проходили сценарий, критических точек не возникало.</p>
                  <p>
                    При выборе тренера пользователи ориентировались на чипсы и подсказки
                    по типу занятий — особенно это было важно для возрастной категории 50+.
                  </p>
                </div>
              </div>
              <Image
                src="/images/cases/world-class/ux-booking.png"
                alt="Экраны сценария записи на тренировку"
                width={680}
                height={470}
                sizes="(min-width: 768px) 680px, 100vw"
                className={styles.scenarioImage}
              />
            </div>

            <div className={styles.scenario}>
              <div className={`${styles.narrow} ${styles.block}`}>
                <h3 className={styles.h2}>Страница тренера и отзывы</h3>
                <div className={styles.body}>
                  <p>
                    Информация о тренере была воспринята как достаточно подробная и внушающая
                    доверие (образование, опыт, рейтинг).
                  </p>
                  <p>
                    Отзывы отмечены как «реалистичные» благодаря более конкретным
                    формулировкам.
                  </p>
                </div>
              </div>
              <Image
                src="/images/cases/world-class/ux-trainer.png"
                alt="Экраны страницы тренера и отзывов"
                width={680}
                height={470}
                sizes="(min-width: 768px) 680px, 100vw"
                className={styles.scenarioImage}
              />
            </div>

            <div className={styles.scenario}>
              <div className={`${styles.narrow} ${styles.listBlock}`}>
                <div className={styles.block}>
                  <h3 className={styles.h2}>Понимание различий между клубными картами</h3>
                  <div className={styles.body}>
                    <p>
                      Названия карт (“Классическая“, «Семейная», «Детская») помогали
                      пользователям сориентироваться.
                    </p>
                    <p>Однако при сравнении условий возникали вопросы:</p>
                  </div>
                </div>
                <StarList
                  items={[
                    "Неочевидно, какие услуги включены, а какие являются дополнительными.",
                    "Пользователи не заметили, что ряд опций (парковка, прачечная, шкафчик, посещение других городов, гостевые визиты) — платные.",
                    "Названия дополнительных опций воспринимались как входящие в карту по умолчанию.",
                  ]}
                />
                <div className={`${styles.block} ${styles.gap8}`}>
                  <p className={styles.strong}>Вывод</p>
                  <p className={styles.body}>
                    Гипотеза о понятности карт <strong>не подтвердилась</strong>. Требуется
                    чёткое визуальное и текстовое разграничение «Основные услуги» /
                    «Дополнительные (оплачиваются отдельно)».
                  </p>
                </div>
              </div>
              <Image
                src="/images/cases/world-class/ux-club-cards.png"
                alt="Экраны оформления клубной карты с дополнительными опциями"
                width={680}
                height={470}
                sizes="(min-width: 768px) 680px, 100vw"
                className={styles.scenarioImage}
              />
            </div>

            <div className={`${styles.narrow} ${styles.block}`}>
              <h3 className={styles.h2}>Дополнительные замечания</h3>
              <div className={styles.body}>
                <p>Длинные текстовые блоки почти не читаются — пользователи их пропускали.</p>
                <p>
                  Нужно явное обозначение платных опций, прояснение условий заморозки
                  и пояснения по посещению клубов в других городах (нелогичность доплаты при
                  наличии действующей карты).
                </p>
              </div>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* Финальные макеты */}
          <section className={styles.wideSection} aria-labelledby="final-title">
            <h2 id="final-title" className={`${styles.narrow} ${styles.sectionTitle}`}>
              Финальные макеты
            </h2>
            <div className={styles.finalScreens}>
              <figure className={styles.finalCard}>
                <Image
                  src="/images/cases/world-class/final-home.png"
                  alt="Финальный макет главного экрана"
                  width={580}
                  height={623}
                  sizes="(min-width: 1260px) 580px, (min-width: 768px) 50vw, 100vw"
                  className={styles.finalImage}
                />
                <figcaption className={styles.body}>
                  Сместил акцент на главном экране: вместо услуг основным шагом для
                  пользователя стал проход в клуб.
                </figcaption>
              </figure>
              <figure className={styles.finalCard}>
                <Image
                  src="/images/cases/world-class/final-trainer.png"
                  alt="Финальный макет выбора тренера и карточки тренировки"
                  width={580}
                  height={623}
                  sizes="(min-width: 1260px) 580px, (min-width: 768px) 50vw, 100vw"
                  className={styles.finalImage}
                />
                <figcaption className={styles.body}>
                  Переработал карточку тренировки и тренера
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        <ScreensCarousel />
      </main>

      <Footer />
    </>
  );
}
