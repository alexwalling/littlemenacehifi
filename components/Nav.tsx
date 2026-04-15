"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full px-6 sm:px-12 py-5 sm:py-6 flex justify-between items-center z-50 bg-cream/95 backdrop-blur-md border-b border-red/20">
        <Link
          href="/"
          className="font-playfair text-[0.95rem] sm:text-[1.1rem] font-semibold tracking-[0.15em] uppercase text-black no-underline"
        >
          Little Menace
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-10 list-none">
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] bg-transparent cursor-pointer"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-10 sm:hidden">
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="font-playfair text-2xl font-normal text-black no-underline hover:text-red transition-colors"
          >
            About
          </Link>
          <Link
            href="/#house-rules"
            onClick={() => setMenuOpen(false)}
            className="font-playfair text-2xl font-normal text-black no-underline hover:text-red transition-colors"
          >
            House Rules
          </Link>
          <Link
            href="/the-plan"
            onClick={() => setMenuOpen(false)}
            className={`font-playfair text-2xl font-normal no-underline transition-colors ${
              pathname === "/the-plan" ? "text-red" : "text-black hover:text-red"
            }`}
          >
            The Plan
          </Link>
          <div className="mt-8 w-8 h-px bg-red" />
          <Link
            href="/#signup"
            onClick={() => setMenuOpen(false)}
            className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-red no-underline"
          >
            Get Notified
          </Link>
        </div>
      )}
    </>
  );
}
