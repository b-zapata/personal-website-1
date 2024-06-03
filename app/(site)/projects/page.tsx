import { Metadata } from "next";
import Hero from "@/components/Projects/Hero";
import ProjectsTab from "@/components/Projects/ProjectsTab";

export const metadata: Metadata = {
  title: "Benjamin's Portfolio",
  description: "This is Benjamin Zapata's portfolio",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsTab />
    </main>
  );
}
