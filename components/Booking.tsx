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
    <section id="book" className="relative bg-[#10291F] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="smallcaps text-[11px] text-[#D4A24E]">Book a table</p>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.02em] text-[#F5F1E8] sm:text-5xl">
          Book a table for sunset
        </h2>

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
            className="grid content-start gap-4 bg-[#143A29] p-8 sm:p-12"
            noValidate
          >
            <div>
              <label htmlFor="f-name" className="mb-1.5 block font-bold text-[#F5F1E8]">
                Name
              </label>
              <input
                id="f-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-[48px] w-full border border-white/15 bg-[#0D2B1E] px-3.5 py-3 text-base text-[#F5F1E8] outline-none focus:border-[#2E9E5B] focus:ring-2 focus:ring-[#2E9E5B]/40"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="f-date" className="mb-1.5 block font-bold text-[#F5F1E8]">
                  Date
                </label>
                <input
                  id="f-date"
                  type="text"
                  autoComplete="off"
                  placeholder="e.g. Friday 14 November"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="min-h-[48px] w-full border border-white/15 bg-[#0D2B1E] px-3.5 py-3 text-base text-[#F5F1E8] outline-none focus:border-[#2E9E5B] focus:ring-2 focus:ring-[#2E9E5B]/40"
                />
              </div>
              <div>
                <label htmlFor="f-guests" className="mb-1.5 block font-bold text-[#F5F1E8]">
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
                  className="min-h-[48px] w-full border border-white/15 bg-[#0D2B1E] px-3.5 py-3 text-base text-[#F5F1E8] outline-none focus:border-[#2E9E5B] focus:ring-2 focus:ring-[#2E9E5B]/40"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm font-semibold text-[#D4A24E]">
                {error}
              </p>
            )}

            <div className="mt-2">
              <button
                type="submit"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#2E9E5B] px-8 py-3.5 text-base font-bold text-white transition-colors duration-300 hover:bg-[#D4A24E] hover:text-[#0A1F16]"
              >
                Book on WhatsApp
              </button>
            </div>

            <p role="status" className="min-h-6 text-base font-bold text-[#F5F1E8]">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
