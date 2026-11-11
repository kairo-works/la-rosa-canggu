import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "About — La Rosa Canggu",
  description:
    "La Rosa is a beach-side restaurant and bar in the heart of Canggu, on Batu Bolong beach. Open every day, 7am to midnight — breakfast after the surf, lunch in the shade, dinner and drinks as the sky turns orange.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#0A1F16] text-[#F5F1E8]">
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
