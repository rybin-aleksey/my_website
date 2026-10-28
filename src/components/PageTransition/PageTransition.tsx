import { type ReactNode, ViewTransition } from "react";

/** Тип перехода для ссылок между главной и кейсами (Link transitionTypes). */
export const PAGE_FADE = "page-fade";

// Переход между страницами: всё, что видно в окне, уходит в прозрачность,
// затем новая страница проявляется. Срабатывает только для ссылок с типом
// PAGE_FADE — кнопки браузера «назад/вперёд» меняют страницу без анимации.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{ [PAGE_FADE]: "page-fade-in", default: "none" }}
      exit={{ [PAGE_FADE]: "page-fade-out", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
