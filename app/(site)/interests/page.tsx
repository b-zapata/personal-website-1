import { Metadata } from "next";
import Hero from "@/components/Interests/Hero";
import InterestsTab from "@/components/Interests/InterestsTab";

export const metadata: Metadata = {
  title: "Benjamin's Portfolio",
  description: "This is Benjamin Zapata's portfolio",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <InterestsTab />
    </main>
  );
}
