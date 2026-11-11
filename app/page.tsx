"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import About from "@/components/About";
import Visit from "@/components/Visit";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Lazy-load the menu (below the fold) as the guide requires.
const Menu = dynamic(() => import("@/components/Menu"), {
  ssr: true,
  loading: () => (
    <div className="flex h-96 items-center justify-center bg-[#122E30]">
      <span className="smallcaps text-[11px] text-[#E3A83B]/70">
        Loading the menu…
      </span>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FBF6EF] text-[#2B211C]">
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <HeroVideo />
      <Menu />
      <About />
      <Gallery />
      <Visit />
      <Booking />
      <Footer />
    </main>
  );
}
