import { Metadata } from "next";
import Hero from "@/components/Interests/Hero";
import InterestsTab from "@/components/Interests/InterestsTab";

export const metadata: Metadata = {
  title: "Benjamin's Interests",
  description: "This is are some of Benjamin's interests.",
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
