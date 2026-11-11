import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "./fonts/PlayfairDisplay-latin-normal-400-900.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./fonts/PlayfairDisplay-latin-italic-400-900.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const karla = localFont({
  src: [
    {
      path: "./fonts/Karla-latin-normal-200-800.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "./fonts/Karla-latin-italic-200-800.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Rosa Canggu — Beach-side restaurant & bar, Batu Bolong Beach",
  description:
    "La Rosa Canggu is a beach-side restaurant and bar on Batu Bolong beach in Canggu — tom yum seafood, nasi goreng, kung pao chicken and cocktails with your feet in the sand. Open every day 7am to midnight. Book a table on WhatsApp.",
  openGraph: {
    title: "La Rosa Canggu — Beach-side restaurant & bar, Batu Bolong Beach",
    description:
      "Tom yum seafood, nasi goreng, kung pao chicken and a Tequila Sunrise, with your feet in the sand on Batu Bolong beach. Open daily 7am – midnight.",
    images: ["/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${karla.variable} antialiased bg-[#0A1F16] text-[#F5F1E8]`}
      >
        {children}
      </body>
    </html>
  );
}
