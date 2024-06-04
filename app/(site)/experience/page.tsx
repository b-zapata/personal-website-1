import { Metadata } from "next";
import Hero from "@/components/Experience/Hero";
import ExperienceTab from "@/components/Experience/ExperienceTab";

export const metadata: Metadata = {
  title: "Benjamin's Portfolio",
  description: "This is Benjamin Zapata's portfolio",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceTab />
    </main>
  );
}
