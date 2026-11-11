"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-[#FBF6EF] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="smallcaps text-[11px] text-[#A84A12]">About</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.02em] text-[#2B211C] sm:text-5xl">
            A beach table,
            <br />
            all day long
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#2B211C]/85 sm:text-lg">
            La Rosa is a beach-side restaurant and bar in the heart of
            Canggu, on Batu Bolong beach. It opens at 7 in the morning and
            does not close until midnight — breakfast after the surf, lunch
            in the shade, dinner and drinks as the sky turns orange.
          </p>
          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-[#2B211C]/85 sm:text-lg">
            The menu leans Indonesian and Asian — nasi goreng, tom yum
            seafood, kung pao chicken — with a bar built for sunset: the
            Tequila Sunrise is the house pour. Come straight off the sand;
            nobody dresses up here.
          </p>
          <a
            href="#gallery"
            className="mt-8 inline-block text-base font-bold text-[#2B211C] transition-colors hover:text-[#A84A12]"
          >
            See the beach and the drinks <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="https://thesurfatlas.com/wp-content/uploads/2020/10/Canggu-surf.jpg"
            alt="Surfers on the waves at Canggu"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
