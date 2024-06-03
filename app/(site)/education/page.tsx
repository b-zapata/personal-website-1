import { Metadata } from "next";
import Hero from "@/components/Education/Hero";
import Degrees from "@/components/Education/Degrees";
import Courses from "@/components/Education/Courses";

export const metadata: Metadata = {
  title: "Benjamin's Portfolio",
  description: "This is Benjamin Zapata's portfolio",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Degrees />
      <Courses />
    </main>
  );
}
