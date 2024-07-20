import { Metadata } from "next";
import Hero from "@/components/Experience/Hero";
import ExperienceTab from "@/components/Experience/ExperienceTab";

export const metadata: Metadata = {
  title: "Benjamin's Experience",
  description: "This are some of Benjamin's professional experiences.",
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
