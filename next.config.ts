import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Страница для нанимателей открывается на главной (группа (for-employers)),
  // старые ссылки на /for-employers ведут туда же.
  redirects() {
    return [
      {
        source: "/for-employers",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
