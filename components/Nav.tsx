"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full px-12 py-6 flex justify-between items-center z-50 bg-cream/95 backdrop-blur-md border-b border-red/20">
      <Link
        href="/"
        className="font-playfair text-[1.1rem] font-semibold tracking-[0.15em] uppercase text-black no-underline"
      >
        Little Menace
      </Link>
      <ul className="flex gap-10 list-none">
        <li>
          <Link
            href="/#about"
            className="text-[0.8rem] font-normal tracking-[0.1em] uppercase text-warm-gray hover:text-red transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#house-rules"
            className="text-[0.8rem] font-normal tracking-[0.1em] uppercase text-warm-gray hover:text-red transition-colors duration-300"
          >
            House Rules
          </Link>
        </li>
        <li>
          <Link
            href="/the-plan"
            className={`text-[0.8rem] font-normal tracking-[0.1em] uppercase transition-colors duration-300 ${
              pathname === "/the-plan"
                ? "text-red"
                : "text-warm-gray hover:text-red"
            }`}
          >
            The Plan
          </Link>
        </li>
      </ul>
    </nav>
  );
}
