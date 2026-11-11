"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import Visit from "@/components/Visit";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Lazy-load the menu (below the fold) as the guide requires.
const Menu = dynamic(() => import("@/components/Menu"), {
  ssr: true,
  loading: () => (
    <div className="flex h-96 items-center justify-center bg-[#0D2B1E]">
      <span className="smallcaps text-[11px] text-[#D4A24E]/70">
        Loading the menu…
      </span>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A1F16] text-[#F5F1E8]">
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <HeroVideo />
      <Menu />
      <Gallery />
      <Visit />
      <Booking />
      <Footer />
    </main>
  );
}
