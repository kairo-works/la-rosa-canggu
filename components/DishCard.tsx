"use client";

import Image from "next/image";

type DishCardProps = {
  name: string;
  desc: string;
  chip: string;
  price: string;
  image: string;
  alt: string;
};

export default function DishCard({
  name,
  desc,
  chip,
  price,
  image,
  alt,
}: DishCardProps) {
  return (
    <article className="dish-card group relative overflow-hidden rounded-sm border border-[#B4432F]/25 bg-white">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        {/* Floating tag — frosted glass, appears on hover */}
        <div className="dish-chip absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] text-white backdrop-blur-md">
          {chip}
        </div>
      </div>

      <div className="px-6 pb-7 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-light tracking-[0.02em] text-[#2B211C]">
            {name}
          </h3>
          <span className="whitespace-nowrap font-display text-xl text-[#93331F]">
            {price}
          </span>
        </div>
        <p className="mt-3 text-sm font-light leading-relaxed text-[#6D5A4E]">
          {desc}
        </p>
        <div className="mt-5 h-px w-10 bg-[#B4432F]/70 transition-all duration-700 ease-out group-hover:w-20" />
      </div>
    </article>
  );
}
