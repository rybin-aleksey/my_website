import type { NextConfig } from "next";

// Статический экспорт для Timeweb Cloud App Platform: next build кладёт
// готовый сайт в out/, сервер не нужен. Поэтому здесь нет cacheComponents
// и partialPrefetching (несовместимы с экспортом) и серверных редиректов:
// старый адрес /for-employers ведёт на главную через статическую страницу
// (src/app/for-employers/page.tsx).
const nextConfig: NextConfig = {
  output: "export",
  // Страницы лежат как /cases/world-class/index.html — так их отдаёт
  // любой статический хостинг
  trailingSlash: true,
  // Оптимизатор картинок работает только на сервере: файлы (уже сжатые
  // WebP) отдаются из public как есть
  images: { unoptimized: true },
};

export default nextConfig;
