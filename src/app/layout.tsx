import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Алексей Рыбин — продуктовый дизайнер",
    template: "%s — Алексей Рыбин",
  },
  description:
    "Решаю сложные продуктовые задачи, нахожу понятные и проверенные решения.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: при переходе между страницами Next сбрасывает
    // скролл мгновенно, а не плавно (smooth остаётся для якорей)
    <html lang="ru" className={inter.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
