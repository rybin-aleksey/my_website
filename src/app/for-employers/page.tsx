import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Cases } from "./_components/Cases";
import { Contacts } from "./_components/Contacts";
import { Experience } from "./_components/Experience";
import { Hero, HeroHeader } from "./_components/Hero";
import { WhatIDo } from "./_components/WhatIDo";

export const metadata: Metadata = {
  title: { absolute: "Алексей Рыбин — продуктовый дизайнер" },
};

export default function ForEmployersPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <Hero />
        <Cases />
        <Experience />
        <WhatIDo />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
