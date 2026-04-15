"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="signup" className="bg-black w-full py-24 px-8 text-center">
      <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-red mb-8">
        Mailing List
      </p>
      <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-cream max-w-[600px] mx-auto mb-6">
        Be the first to know when the doors open.
      </h2>
      <p className="text-base font-light leading-[1.9] text-warm-gray-light max-w-[500px] mx-auto mb-4">
        Sign up and we&apos;ll let you know when we&apos;re ready. No spam, no
        nonsense. Just a heads up when it&apos;s time, and maybe a playlist or
        two before that.
      </p>
      <p className="text-[0.85rem] font-light text-warm-gray max-w-[500px] mx-auto mb-10">
        Early subscribers get first access to our opening event.
      </p>
      <form
        className="flex max-w-[440px] mx-auto max-sm:flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input
          type="email"
          placeholder="Your email address"
          required
          disabled={submitted}
          className="flex-1 px-5 py-4 border border-cream/15 border-r-0 bg-transparent text-cream font-inter text-[0.85rem] tracking-[0.02em] outline-none focus:border-red placeholder:text-warm-gray placeholder:tracking-[0.05em] transition-colors duration-300 max-sm:border-r max-sm:border-r-cream/15 max-sm:border-b-0 disabled:opacity-60"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-red text-cream border border-red font-inter text-[0.7rem] font-medium tracking-[0.15em] uppercase cursor-pointer hover:bg-red-light hover:border-red-light transition-all duration-300 disabled:opacity-60"
          disabled={submitted}
        >
          {submitted ? "You're In" : "Sign Up"}
        </button>
      </form>
      {submitted && (
        <p className="mt-6 text-[0.85rem] text-red font-medium tracking-[0.05em]">
          Welcome to the list. We&apos;ll be in touch.
        </p>
      )}
    </div>
  );
}
