"use client";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-[#d4af37]/30 bg-[#0b0b0b]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37] bg-[#d4af37] text-sm font-bold text-[#0b0b0b] shadow-[0_0_20px_rgba(212,175,55,0.35)]">
            N
          </div>
          <span className="text-lg font-semibold tracking-[0.2em] text-[#f5e7a1] uppercase">
            Ne_la
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#111111] p-1.5 shadow-[0_0_18px_rgba(212,175,55,0.08)]">
          <Link
            href={"/"}
            className="rounded-full px-5 py-2 text-sm font-medium text-[#f4e9b8] transition hover:bg-[#d4af37] hover:text-[#0b0b0b]"
          >
            Home
          </Link>
          <a
            href={"/users"}
            className="rounded-full px-5 py-2 text-sm font-medium text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#0b0b0b]"
          >
            Users
          </a>
        </div>
      </div>
    </nav>
  );
};
