"use client";

import Image from "next/image";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-[#F6E8D8] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="smallcaps text-[11px] text-[#93331F]">Visit</p>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.02em] text-[#2B211C] sm:text-5xl">
          On the sand,
          <br />
          in the heart of Canggu
        </h2>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="bg-[#FBF6EF] p-8 sm:p-12">
            <p className="font-display text-2xl leading-snug text-[#2B211C] sm:text-[26px]">
              La Rosa Canggu
              <br />
              Jl. Pantai Batu Bolong
              <br />
              Canggu 80361, Bali
            </p>
            <a
              href="https://www.openstreetmap.org/search?query=La%20Rosa%20Canggu%2C%20Jl.%20Pantai%20Batu%20Bolong%2C%20Canggu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-base font-bold text-[#2B211C] transition-colors hover:text-[#93331F]"
            >
              See the area <span aria-hidden="true">&rarr;</span>
            </a>

            <dl className="mt-8">
              <div className="flex justify-between gap-3 border-t border-[#E5D3C0] py-3 text-[17px]">
                <dt className="font-semibold">Every day</dt>
                <dd className="m-0 tabular-nums">07:00 – 24:00</dd>
              </div>
            </dl>

            <p className="mt-6 text-base leading-relaxed text-[#6D5A4E]">
              Breakfast after a morning surf, a long lunch, then cocktails
              as the sun drops — the sun sets around 6pm all year in Bali,
              and La Rosa&rsquo;s tables face straight at it. Batu Bolong is
              Canggu&rsquo;s mellow, longboard-friendly surf beach, so the
              sand in front of the restaurant is busy from first light.
            </p>

            <p className="mt-6 text-base leading-relaxed text-[#2B211C]">
              WhatsApp{" "}
              <a
                href="https://wa.me/6287817661749"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#93331F] hover:underline"
              >
                +62 878-1766-1749
              </a>
              {" · "}
              <a
                href="https://www.instagram.com/larosa_canggu_"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#93331F] hover:underline"
              >
                @larosa_canggu_
              </a>
            </p>
          </div>

          <div className="relative min-h-[320px] w-full overflow-hidden">
            <Image
              src="https://blog-img-dev.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2025/03/Batu-Bolong-Beach.jpg"
              alt="The sea arch at Batu Bolong beach at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
