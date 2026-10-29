import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false },
};

// Старый адрес страницы для нанимателей: она переехала на главную.
// В статическом экспорте серверных редиректов нет, поэтому переход делает
// сам браузер (meta refresh), а ссылка — на случай, если он не сработал.
export default function ForEmployersRedirectPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/" />
      <p>
        Страница переехала: <Link href="/">перейти на главную</Link>
      </p>
    </main>
  );
}
