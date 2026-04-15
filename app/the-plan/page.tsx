import type { Metadata } from "next";
import Phases from "@/components/Phases";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "The Plan — Little Menace Hi-Fi",
  description:
    "Little Menace Hi-Fi is building in stages. Coffee and listening room first, then a record store, then speakers and a wine bar. Here's the full roadmap.",
  openGraph: {
    title: "The Plan — Little Menace Hi-Fi",
    description:
      "Little Menace Hi-Fi is building in stages. Coffee and listening room first, then a record store, then speakers and a wine bar.",
  },
};

export default function ThePlanPage() {
  return (
    <main className="pt-24">
      <div className="max-w-[800px] mx-auto px-8 pt-16 pb-4">
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-warm-gray mb-6">
          Little Menace Hi-Fi
        </p>
        <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] text-black mb-6">
          The Plan
        </h1>
        <p className="text-base font-light leading-[1.9] text-charcoal max-w-[560px]">
          We&apos;re not trying to be everything at once. Three phases. Each one
          building on the last. Here&apos;s how Little Menace grows.
        </p>
      </div>
      <Phases />
      <EmailSignup />
    </main>
  );
}
