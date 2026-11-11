"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E2426] px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="font-display text-2xl font-light tracking-[0.28em] text-[#FBF6EF]">
          LA ROSA
        </p>
        <p className="mt-3 font-display text-lg font-light italic tracking-[0.08em] text-[#E3A83B]">
          Come for the surf. Stay for the sunset.
        </p>

        <div className="mt-8 h-px w-24 bg-[#E3A83B]/70" />

        <p className="mt-8 text-sm font-light text-[#FBF6EF]/65">
          La Rosa Canggu, Jl. Pantai Batu Bolong, Canggu — Daily 07:00 –
          24:00
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://wa.me/6287817661749"
            target="_blank"
            rel="noopener noreferrer"
            className="smallcaps text-[11px] text-[#FBF6EF]/70 transition-colors duration-500 hover:text-[#E3A83B]"
          >
            WhatsApp
          </a>
          <span className="h-3 w-px bg-[#E3A83B]/40" />
          <a
            href="https://www.instagram.com/larosa_canggu_"
            target="_blank"
            rel="noopener noreferrer"
            className="smallcaps text-[11px] text-[#FBF6EF]/70 transition-colors duration-500 hover:text-[#E3A83B]"
          >
            Instagram
          </a>
        </div>

        <p className="mt-10 text-xs font-light tracking-[0.14em] text-[#FBF6EF]/50">
          © 2026 La Rosa Canggu — Demo preview by{" "}
          <a
            href="https://github.com/kairo-works"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E3A83B] hover:underline"
          >
            Kairo
          </a>
        </p>
      </div>
    </footer>
  );
}
