import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Technologies from "@/components/Technologies";
import Endorsement from "@/components/Endorsement";
import MyStory from "@/components/MyStory";

export const metadata: Metadata = {
  title: "Benjamin's Portfolio (IG)",
  description: "This is Benjamin Zapata's portfolio (IG)",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Technologies />
      <MyStory />
    </main>
  );
}
