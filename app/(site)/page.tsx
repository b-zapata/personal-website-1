import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
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
