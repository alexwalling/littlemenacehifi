export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32 pb-16 relative bg-cream">
      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-warm-gray-light" />

      <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-warm-gray mb-8">
        A listening room for people who give a damn
      </p>

      <h1 className="font-playfair text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.05] tracking-[-0.02em] text-black mb-2">
        Little <em className="italic text-red">Menace</em>
      </h1>

      <p className="font-playfair text-[clamp(1rem,2vw,1.4rem)] font-normal tracking-[0.3em] uppercase text-warm-gray mb-12">
        Hi-Fi
      </p>

      <p className="text-base font-light text-warm-gray max-w-[480px] leading-[1.8]">
        Coffee. Vinyl. Conversation. A place to slow down, listen closely, and
        be present with good people and great sound.
      </p>

      <div className="mt-16 flex flex-col items-center gap-3">
        <div className="w-8 h-px bg-red" />
        <p className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-warm-gray-light">
          Coming soon to West Loop, Chicago
        </p>
      </div>
    </section>
  );
}
