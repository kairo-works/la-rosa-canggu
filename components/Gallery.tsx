"use client";

import Image from "next/image";

const WALL = [
  {
    src: "https://www.sunsetandbikini.com/wp-content/uploads/2022/11/IMG_4698-1152x1536.jpg",
    alt: "Two orange cocktails against a sunset over the ocean",
  },
  {
    src: "https://images.trvl-media.com/place/553248635050895109/6f5b90d5-9d3c-45d5-98f6-78568f7e2a4e.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
    alt: "Sunset over Batu Bolong beach, Canggu",
  },
  {
    src: "https://images.baliuntold.com/Batu-Bolong-beach-sunset.jpg",
    alt: "Sunset on Batu Bolong beach, Canggu, with people on the sand",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <p className="smallcaps text-[11px] text-[#A84A12]">Gallery</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.02em] text-[#2B211C] sm:text-5xl">
              The beach, the bar, the sunset
            </h2>
          </div>
          <a
            href="#book"
            className="text-base font-bold text-[#2B211C] transition-colors hover:text-[#A84A12]"
          >
            Book a table <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden">
          <Image
            src="https://roavara.com/wp-content/uploads/2026/03/Canggu-beach-bar-sunset-Bali-drinks.png"
            alt="Cocktails on a Canggu beach bar at sunset"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-3">
          {WALL.map((img) => (
            <div key={img.src} className="relative aspect-square w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
