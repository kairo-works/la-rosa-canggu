"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Write the name the booking is under.");
      return;
    }
    if (!date.trim()) {
      setError("Write the day you want to come.");
      return;
    }
    const n = Number(guests);
    if (!guests.trim() || !Number.isFinite(n) || n < 1) {
      setError("Write how many people, as a number.");
      return;
    }
    setError("");
    const text = `Hi La Rosa! I'd like to book a table for sunset.\nName: ${name.trim()}\nDate: ${date.trim()}\nGuests: ${guests.trim()}`;
    setStatus("Opening WhatsApp…");
    window.open(
      `https://wa.me/6287817661749?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="book" className="relative bg-[#FBF6EF] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="smallcaps text-[11px] text-[#93331F]">Book a table</p>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-6">
          <h2 className="font-display text-4xl font-light leading-tight tracking-[0.02em] text-[#2B211C] sm:text-5xl">
            Book a table for sunset
          </h2>
          <p className="max-w-md text-base text-[#6D5A4E]">
            We reply on WhatsApp within the day.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="relative min-h-[320px] w-full overflow-hidden">
            <Image
              src="https://images.baliuntold.com/Batu-Bolong-beach-sunset.jpg"
              alt="Sunset on Batu Bolong beach, Canggu, with people on the sand"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <form
            onSubmit={onSubmit}
            className="grid content-start gap-4 bg-[#F6E8D8] p-8 sm:p-12"
            noValidate
          >
            <div>
              <label htmlFor="f-name" className="mb-1.5 block font-bold text-[#2B211C]">
                Name
              </label>
              <input
                id="f-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-[48px] w-full border border-[#E5D3C0] bg-[#FBF6EF] px-3.5 py-3 text-base text-[#2B211C] outline-none focus:border-[#93331F] focus:ring-2 focus:ring-[#93331F]/40"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="f-date" className="mb-1.5 block font-bold text-[#2B211C]">
                  Date
                </label>
                <input
                  id="f-date"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. Friday 14 November"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="min-h-[48px] w-full border border-[#E5D3C0] bg-[#FBF6EF] px-3.5 py-3 text-base text-[#2B211C] outline-none focus:border-[#93331F] focus:ring-2 focus:ring-[#93331F]/40"
                />
              </div>
              <div>
                <label htmlFor="f-guests" className="mb-1.5 block font-bold text-[#2B211C]">
                  Guests
                </label>
                <input
                  id="f-guests"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="e.g. 2"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="min-h-[48px] w-full border border-[#E5D3C0] bg-[#FBF6EF] px-3.5 py-3 text-base text-[#2B211C] outline-none focus:border-[#93331F] focus:ring-2 focus:ring-[#93331F]/40"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm font-semibold text-[#93331F]">
                {error}
              </p>
            )}

            <div className="mt-2">
              <button
                type="submit"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#93331F] px-8 py-3.5 text-base font-bold text-white transition-colors duration-300 hover:bg-[#752713]"
              >
                Book on WhatsApp
              </button>
            </div>

            <p role="status" className="min-h-6 text-base font-bold text-[#2B211C]">
              {status}
            </p>
            <p className="text-sm leading-relaxed text-[#6D5A4E]">
              Or message us directly on WhatsApp: +62 878-1766-1749. Sunset
              tables go first — book ahead for the 5–7pm window.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
