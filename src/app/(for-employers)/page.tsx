import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { Cases } from "./_components/Cases";
import { Contacts } from "./_components/Contacts";
import { Experience } from "./_components/Experience";
import { Hero, HeroHeader } from "./_components/Hero";
import { WhatIDo } from "./_components/WhatIDo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Алексей Рыбин — продуктовый дизайнер" },
};

export default function ForEmployersPage() {
  return (
    <PageTransition>
      <HeroHeader />
      <main>
        <Hero />
        <div className={styles.rest}>
          <Cases />
          <Experience />
          <WhatIDo />
          <Contacts />
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
