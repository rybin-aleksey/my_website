import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // В макетах нет отдельной главной страницы: ссылки на версии сайта
  // распространяются отдельно, а корень ведёт на страницу для нанимателей.
  redirects() {
    return [
      {
        source: "/",
        destination: "/for-employers",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
