"use client"; // Add this at the top

import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Technologies from "@/components/Technologies";
import MyStory from "@/components/MyStory";

// Inline type declaration for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Log the redirect event to Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "redirect", {
        event_category: "navigation",
        event_label: "Redirect to homepage",
      });
    }

    // Perform the redirect after a short delay to ensure the event is logged
    setTimeout(() => {
      router.push("/");
    }, 100); // Adjust the delay as needed (e.g., 100ms)
  }, [router]);

  return (
    <>
      <Head>
        <title>(IG) Redirecting to Benjamin's Portfolio Website...</title>
        <meta
          name="description"
          content="Redirecting to Benjamin's portfolio website from Instagram..."
        />
        {/* Other metadata can be added here */}
      </Head>
      <main>
        <p>Redirecting...</p>
        <Hero />
        <Feature />
        <Technologies />
        <MyStory />
      </main>
    </>
  );
}
