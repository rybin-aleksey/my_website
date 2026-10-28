import { type RefObject, useEffect } from "react";

// Бесконечная лента: медленно едет влево, останавливается при наведении курсора
// и фокусе с клавиатуры. Каждый элемент, полностью ушедший за левый край,
// переносится в конец ленты, поэтому нет общего «прыжка» в конце круга.
// Ширина всех элементов track должна быть больше ширины root хотя бы на один шаг.
export function useMarquee(
  rootRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  speed: number,
) {
  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(track.children) as HTMLElement[];
    if (items.length < 2) return;

    let step = 0;
    let total = 0;
    let offset = 0;
    let paused = false;
    let last = 0;
    let frame = 0;

    // Пока лента скрыта (display: none), шаг равен нулю — ждём resize
    const measure = () => {
      step = items[1].offsetLeft - items[0].offsetLeft;
      total = step * items.length;
    };

    const render = () => {
      items.forEach((item, index) => {
        const natural = index * step;
        // Позиция элемента по кругу; уехавший влево больше чем на шаг уходит в конец
        const x = ((((natural - offset + step) % total) + total) % total) - step;
        item.style.transform = `translate3d(${x - natural}px, 0, 0)`;
      });
    };

    const tick = (time: number) => {
      if (last && !paused && total > 0) {
        offset = (offset + (speed * (time - last)) / 1000) % total;
        render();
      }
      last = time;
      frame = requestAnimationFrame(tick);
    };

    const pause = () => (paused = true);
    const resume = () => {
      if (!root.matches(":hover") && !root.matches(":focus-visible")) paused = false;
    };
    const onResize = () => {
      measure();
      if (total > 0) render();
    };

    measure();
    frame = requestAnimationFrame(tick);
    root.addEventListener("pointerenter", pause);
    root.addEventListener("pointerleave", resume);
    root.addEventListener("focus", pause);
    root.addEventListener("blur", resume);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointerenter", pause);
      root.removeEventListener("pointerleave", resume);
      root.removeEventListener("focus", pause);
      root.removeEventListener("blur", resume);
      window.removeEventListener("resize", onResize);
      items.forEach((item) => item.style.removeProperty("transform"));
    };
  }, [rootRef, trackRef, speed]);
}
