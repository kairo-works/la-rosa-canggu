"use client";

import DishCard from "./DishCard";

const DISHES = [
  {
    name: "Tom yum seafood",
    desc: "Thai hot-and-sour soup, loaded with seafood.",
    chip: "Thai hot & sour",
    price: "Ask us",
    image:
      "https://img-verda.wongnai.com/p/1920x0/2026/04/17/97c73397a6d247dd948683f062301612.jpg",
    alt: "A bowl of tom yum seafood soup",
  },
  {
    name: "Nasi goreng",
    desc: "Indonesian fried rice — the Bali classic.",
    chip: "The Bali classic",
    price: "Ask us",
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Nasi-Goreng-wide-FS-and-foodporn-57.jpg",
    alt: "Nasi goreng topped with a fried egg",
  },
  {
    name: "Kung pao chicken",
    desc: "Stir-fried chicken, peanuts and dried chillies.",
    chip: "Peanuts & chillies",
    price: "Ask us",
    image:
      "https://thewoksoflife.com/wp-content/uploads/2019/05/kung-pao-chicken-9.jpg",
    alt: "Kung pao chicken with peanuts",
  },
  {
    name: "Crispy fries",
    desc: "Golden, salty — made for a cold drink at sunset.",
    chip: "Golden & salty",
    price: "Ask us",
    image:
      "https://www.dahliaskitchen.hungrrr.co.uk/uploads/images/slideshow/1587309319frenchfries923687_1280.jpg",
    alt: "A pile of golden crispy fries",
  },
  {
    name: "Tequila sunrise",
    desc: "Tequila, orange juice and grenadine — the house pour.",
    chip: "The house pour",
    price: "Ask us",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sunrise-003.jpg",
    alt: "A Tequila Sunrise cocktail",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="frame-brackets mx-auto max-w-3xl px-2 text-center sm:px-6">
          <p className="smallcaps text-[11px] text-[#93331F]">Menu</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.02em] text-[#2B211C] sm:text-5xl">
            From the kitchen &amp; the bar
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#6D5A4E] sm:text-base">
            The dishes below are the ones La Rosa lists on its own page.
            Prices are on the board at the beach and change with the day —
            message us on WhatsApp for today&rsquo;s menu.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {DISHES.map((d) => (
            <DishCard
              key={d.name}
              name={d.name}
              desc={d.desc}
              chip={d.chip}
              price={d.price}
              image={d.image}
              alt={d.alt}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-light tracking-[0.14em] text-[#6D5A4E]">
          Prices are approximate — the full drinks list is on the board at
          the beach.
        </p>
      </div>
    </section>
  );
}
