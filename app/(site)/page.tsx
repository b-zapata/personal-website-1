import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Endorsement from "@/components/Endorsement";
import MyStory from "@/components/MyStory";

export const metadata: Metadata = {
  title: "Benjamin's Portfolio",
  description: "This is Benjamin Zapata's portfolio",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Endorsement />
      <MyStory />
    </main>
  );
}
