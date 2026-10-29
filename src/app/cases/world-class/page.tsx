import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { PAGE_FADE, PageTransition } from "@/components/PageTransition/PageTransition";
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
  { id: "about", label: "О\u00A0компании" },
  { id: "research", label: "Поиск и\u00A0валидация проблем" },
  { id: "hypotheses", label: "Гипотезы по\u00A0улучшению" },
  { id: "solution", label: "Проработка решения" },
  { id: "ux-tests", label: "UX-тесты" },
];

export default function WorldClassCasePage() {
  return (
    <PageTransition>
      <Header
        className={styles.header}
        start={
          <Link
            href="/"
            transitionTypes={[PAGE_FADE]}
            className={styles.backLink}
          >
            <Image src="/icons/back.svg" alt="" width={24} height={24} />
            <span className={styles.backLabel}>На&nbsp;главную</span>
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
              <h2 className={styles.h1}>О&nbsp;компании</h2>
              <div className={styles.body}>
                <p>
                  World Class&nbsp;— крупнейшая премиальная сеть фитнес-клубов, которой доверяют
                  десятки тысяч клиентов. Приложение играет роль «входной точки»
                  в&nbsp;фитнес-экосистему: запись на&nbsp;тренировки, покупка абонементов,
                  рекомендации, доступ в&nbsp;клуб.
                </p>
                <p>
                  Однако несмотря на&nbsp;богатый функционал, продукт страдал от&nbsp;перегруженности,
                  фрагментированной навигации и&nbsp;низкой прозрачности условий. Это снижало
                  вовлечённость и&nbsp;напрямую влияло на&nbsp;транзакции (записи, покупки, продления).
                </p>
              </div>
            </div>
            <div className={styles.listBlock}>
              <div className={styles.block}>
                <h3 className={styles.h2}>Цели, которые я&nbsp;себе ставил</h3>
                <p className={styles.body}>
                  Опираясь на&nbsp;аналитику пользовательских опросов и&nbsp;интервью, я&nbsp;сформировал три
                  ключевые цели:
                </p>
              </div>
              <StarList
                className={styles.gap16}
                items={[
                  "Снизить когнитивную нагрузку при\u00A0выборе тренировок и\u00A0тренеров.",
                  "Увеличить продажи карт и\u00A0абонементов внутри приложения.",
                  "Снизить нагрузку на\u00A0ресепшн, переведя операции в\u00A0цифровые сценарии.",
                ]}
              />
            </div>
          </section>

          <hr className={styles.divider} />

          {/* Поиск и валидация проблем */}
          <section id="research" className={`${styles.narrow} ${styles.section}`}>
            <h2 className={styles.sectionTitle}>Поиск и&nbsp;валидация проблем</h2>
            <div className={styles.subsections}>
              <div className={styles.block}>
                <h3 className={styles.h2}>Оценка текущего сценария</h3>
                <div className={styles.body}>
                  <p>
                    Текущий сценарий приложения World Class выглядит функционально богатым
                    и&nbsp;старается перенести почти весь офлайн‑опыт клуба в&nbsp;мобильный формат:
                    расписание, запись, абонементы, доп. услуги, заморозка, уведомления и&nbsp;т.д.
                    При&nbsp;этом основное впечатление такое:
                  </p>
                  <p>
                    Расписание выстроено логично, но&nbsp;есть риск перегрузки пользователя:
                    сложная навигация, множество статусов и&nbsp;ограничений, которые не&nbsp;всегда
                    очевидны. Приложение больше похоже на&nbsp;«интерфейс регламентов сети клубов»,
                    чем на&nbsp;максимально простой сервис под&nbsp;2–3&nbsp;ключевые задачи пользователя.
                  </p>
                  <p>
                    Главная зона роста&nbsp;— упростить и&nbsp;«вычистить» критические сценарии (просмотр
                    расписания, запись, покупка абонемента), скрыв сложность бизнес‑логики за&nbsp;понятными статусами, минимальным количеством шагов и&nbsp;более прямой
                    навигацией.
                  </p>
                </div>
              </div>

              <div className={styles.listBlock}>
                <div className={styles.block}>
                  <h3 className={styles.h2}>Конкурентный анализ</h3>
                  <p className={styles.body}>
                    В&nbsp;процессе конкурентного анализа приложений конкурентов я&nbsp;пришёл
                    к&nbsp;следующим ключевым инсайтам:
                  </p>
                </div>
                <StarList
                  className={styles.gap20}
                  items={[
                    "Расписание, запись, профиль, абонемент, клубы\u00A0— это «обязательная программа». На\u00A0этом нельзя дифференцироваться, но\u00A0можно терять деньги, если сделать хуже рынка.",
                    <>
                      Конкуренты выигрывают за&nbsp;счёт UX и&nbsp;перехода к&nbsp;персональному опыту.
                      <br />— Меньше шагов, меньше служебных экранов.
                      <br />— Больше контекста и&nbsp;рекомендаций.
                      <br />— По&nbsp;большей части экран не&nbsp;витрина, а&nbsp;дашборд.
                    </>,
                    "Абонементы и\u00A0платежи\u00A0— недоиспользованный канал роста. Необходимо упростить покупку/продление. Встроить их\u00A0в\u00A0реальные сценарии (нет доступа → предложить апгрейд). Информировать о\u00A0статусе на\u00A0главном экране.",
                    "Рекомендации, челленджи, онлайн‑тренировки. Пользователь ожидает что ему будут давать возможность активно развиваться, а\u00A0не\u00A0просто продавать сервис.",
                  ]}
                />
              </div>

              <div className={styles.block}>
                <h3 className={styles.h2}>Исследование</h3>
                <p className={styles.body}>
                  Чтобы определить ключевые точки роста, я&nbsp;провёл двухэтапное исследование,
                  комбинируя качественные и&nbsp;количественные методы.
                </p>
              </div>

              <div className={styles.listBlock}>
                <div className={styles.block}>
                  <h3 className={styles.h2}>Качественный этап</h3>
                  <p className={styles.body}>
                    5&nbsp;UX-тестов текущего сценария сразу выявили критические барьеры:
                  </p>
                </div>
                <div className={styles.hypothesisGroups}>
                  <div className={styles.listBlock}>
                    <HypothesisCard
                      status="confirmed"
                      title="Гипотеза №1"
                      hypothesis="«Пользователь не&nbsp;может легко записаться на&nbsp;тренировку или найти групповые тренировки/тренера»"
                      result="Подтвердилась 5/5"
                    />
                    <StarList
                      items={[
                        "Непонятно, где искать тренировки.",
                        "Нет уверенности, что запись прошла.",
                        "Разница между персональными и\u00A0групповыми тренировками неочевидна.",
                      ]}
                    />
                  </div>
                  <div className={styles.listBlock}>
                    <HypothesisCard
                      status="confirmed"
                      title="Гипотеза №2"
                      hypothesis="«Пользователю непонятна разница между тарифными планами в&nbsp;клубной карте и&nbsp;какие услуги входят в&nbsp;клубную карту»"
                      result="Подтвердилась 4/5"
                    />
                    <StarList
                      items={[
                        "Участники не\u00A0могли понять что входит в\u00A0карту, чем отличаются тарифы, какие услуги будут доступны.",
                        "Нет сравнения карт.",
                        "Пользователи пробуют купить карту не\u00A0из\u00A0того раздела.",
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.listBlock}>
                <div className={`${styles.block} ${styles.gap16}`}>
                  <h3 className={styles.h2}>Количественный этап&nbsp;— 85&nbsp;ответов</h3>
                  <p className={styles.body}>
                    Результаты количественного опроса полностью подтвердили выводы тестов:
                  </p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.stat}>
                    <p className={styles.statValue}>60%+</p>
                    <p>пользователей не&nbsp;понимают условия своей карты.</p>
                  </div>
                  <StarList
                    items={[
                      "Большинство испытывают сложности с\u00A0записью на\u00A0тренировки.",
                      "Большинство испытывают сложности с\u00A0записью на\u00A0тренировки. Карточки тренеров выглядят формальными и\u00A0не\u00A0помогают выбрать специалиста.",
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
              <h2 className={styles.sectionTitle}>Гипотезы по&nbsp;улучшению</h2>
              <p className={styles.body}>
                На&nbsp;основе подтверждённых проблем я&nbsp;сформировал продуктовые гипотезы,
                направленные на&nbsp;улучшение ключевых сценариев и&nbsp;увеличение вовлечённости:
              </p>
            </div>
            <div className={styles.cards24}>
              <ImprovementHypothesis
                context="Большинство не&nbsp;понимает, что входит в&nbsp;стоимость карты, и&nbsp;узнаёт это уже на&nbsp;месте или у&nbsp;менеджера."
                hypothesis="Если явно указать, какие услуги включены в&nbsp;карту, а&nbsp;какие нет, то&nbsp;снизится количество обращений к&nbsp;сотрудникам и&nbsp;негатива."
                metrics={[
                  "Количество обращений в\u00A0поддержку по\u00A0тарифам",
                  "Конверсия в\u00A0покупку карты",
                  "Уровень клиентской удовлетворённости (NPS)",
                ]}
                improvements={[
                  "Сравнительная таблица «карта vs. наборы услуг» в\u00A0карточке клуба.",
                  "Явные бейджи «Включено» / «Дополнительно оплачивается».",
                  "Раздел FAQ по\u00A0карте\u00A0— доступный из\u00A0сценария покупки.",
                ]}
              />
              <ImprovementHypothesis
                context="Люди не&nbsp;могут записаться на&nbsp;персональные тренировки&nbsp;— кнопки нет, интерфейс неочевиден. Информация о&nbsp;тренерах не&nbsp;соответствует цели тренировок."
                hypothesis="Если при&nbsp;выборе цели тренировки выдавать релевантных тренеров и&nbsp;добавить явную кнопку «Записаться», то&nbsp;повысится конверсия в&nbsp;персональные тренировки."
                metrics={["Конверсия в\u00A0персональные тренировки"]}
                improvements={[
                  "Рекомендации тренеров по\u00A0цели (например: «хочу похудеть» → тренеры, специализирующиеся на\u00A0fat loss).",
                  "Отзывы и\u00A0результаты клиентов (до/после) для\u00A0оценки релевантности.",
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
                    "Добавил объяснение причин отказа (“нет доступа к\u00A0тренировке“ → CTA покупки карты).",
                    "Понятный и\u00A0короткий сценарий покупки.",
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
                alt="User flow happy-path сценария: от&nbsp;главного экрана до&nbsp;записи на&nbsp;тренировку и&nbsp;покупки карты"
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
                <p className={styles.body}>Гипотезы, которые я&nbsp;сформировал для&nbsp;UX-тестов:</p>
              </div>
              <div className={styles.cards16}>
                <HypothesisCard
                  status="confirmed"
                  title="Гипотеза №1"
                  hypothesis="«Пользователь понимает: как выбрать подходящего тренера, как записаться на&nbsp;тренировку, как отредактировать/отменить запись»"
                  result="Подтвердилась 5/5"
                />
                <HypothesisCard
                  status="confirmed"
                  title="Гипотеза №2"
                  hypothesis="«Пользователь воспринимает новый формат отзывов как более реалистичный и&nbsp;вызывает доверие»"
                  result="Подтвердилась 4/5"
                />
                <HypothesisCard
                  status="rejected"
                  title="Гипотеза №3"
                  hypothesis="«Пользователю легко понять различия между типами клубных карт и&nbsp;включёнными услугами»"
                  result="Не&nbsp;подтвердилась 1/5"
                />
              </div>
            </div>

            <div className={styles.scenario}>
              <div className={`${styles.narrow} ${styles.block}`}>
                <h3 className={styles.h2}>Сценарии записи на&nbsp;тренировку</h3>
                <div className={styles.body}>
                  <p>Респонденты успешно проходили сценарий, критических точек не&nbsp;возникало.</p>
                  <p>
                    При&nbsp;выборе тренера пользователи ориентировались на&nbsp;чипсы и&nbsp;подсказки
                    по&nbsp;типу занятий&nbsp;— особенно это было важно для&nbsp;возрастной категории 50+.
                  </p>
                </div>
              </div>
              <Image
                src="/images/cases/world-class/ux-booking.png"
                alt="Экраны сценария записи на&nbsp;тренировку"
                width={680}
                height={470}
                sizes="(min-width: 768px) 680px, 100vw"
                className={styles.scenarioImage}
              />
            </div>

            <div className={styles.scenario}>
              <div className={`${styles.narrow} ${styles.block}`}>
                <h3 className={styles.h2}>Страница тренера и&nbsp;отзывы</h3>
                <div className={styles.body}>
                  <p>
                    Информация о&nbsp;тренере была воспринята как достаточно подробная и&nbsp;внушающая
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
                alt="Экраны страницы тренера и&nbsp;отзывов"
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
                    <p>Однако при&nbsp;сравнении условий возникали вопросы:</p>
                  </div>
                </div>
                <StarList
                  items={[
                    "Неочевидно, какие услуги включены, а\u00A0какие являются дополнительными.",
                    "Пользователи не\u00A0заметили, что ряд опций (парковка, прачечная, шкафчик, посещение других городов, гостевые визиты)\u00A0— платные.",
                    "Названия дополнительных опций воспринимались как входящие в\u00A0карту по\u00A0умолчанию.",
                  ]}
                />
                <div className={`${styles.block} ${styles.gap8}`}>
                  <p className={styles.strong}>Вывод</p>
                  <p className={styles.body}>
                    Гипотеза о&nbsp;понятности карт <strong>не&nbsp;подтвердилась</strong>. Требуется
                    чёткое визуальное и&nbsp;текстовое разграничение «Основные услуги» /
                    «Дополнительные (оплачиваются отдельно)».
                  </p>
                </div>
              </div>
              <Image
                src="/images/cases/world-class/ux-club-cards.png"
                alt="Экраны оформления клубной карты с&nbsp;дополнительными опциями"
                width={680}
                height={470}
                sizes="(min-width: 768px) 680px, 100vw"
                className={styles.scenarioImage}
              />
            </div>

            <div className={`${styles.narrow} ${styles.block}`}>
              <h3 className={styles.h2}>Дополнительные замечания</h3>
              <div className={styles.body}>
                <p>Длинные текстовые блоки почти не&nbsp;читаются&nbsp;— пользователи их&nbsp;пропускали.</p>
                <p>
                  Нужно явное обозначение платных опций, прояснение условий заморозки
                  и&nbsp;пояснения по&nbsp;посещению клубов в&nbsp;других городах (нелогичность доплаты при&nbsp;наличии действующей карты).
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
                  Сместил акцент на&nbsp;главном экране: вместо услуг основным шагом для&nbsp;пользователя стал проход в&nbsp;клуб.
                </figcaption>
              </figure>
              <figure className={styles.finalCard}>
                <Image
                  src="/images/cases/world-class/final-trainer.png"
                  alt="Финальный макет выбора тренера и&nbsp;карточки тренировки"
                  width={580}
                  height={623}
                  sizes="(min-width: 1260px) 580px, (min-width: 768px) 50vw, 100vw"
                  className={styles.finalImage}
                />
                <figcaption className={styles.body}>
                  Переработал карточку тренировки и&nbsp;тренера
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        <ScreensCarousel />
      </main>

      <Footer />
    </PageTransition>
  );
}
