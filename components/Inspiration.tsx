"use client";

import Image from "next/image";

const inspirations = [
  {
    src: "https://www.insidehook.com/wp-content/uploads/2023/05/eavesdrop-e1707936765480.jpeg?fit=1200%2C800",
    alt: "Listening lounge with warm lighting, vinyl collection, and slatted wood paneling",
    caption: "Golden hour listening",
  },
  {
    src: "https://www.insidehook.com/wp-content/uploads/2024/02/DSC_5634-2.jpg?w=1500",
    alt: "Tube amplifier and reel-to-reel with vinyl and spirits",
    caption: "The analog altar",
  },
  {
    src: "https://venetosecrets.com/wp-content/uploads/2020/06/Venyer-Sommacampagna-Veneto-Secrets.jpg",
    alt: "Moody cocktail bar with vinyl records, gold speakers, and velvet seating",
    caption: "Records meet cocktails",
  },
  {
    src: "https://preview.redd.it/home-listening-room-build-v0-rlsphm23e2bc1.jpeg?width=1080&crop=smart&auto=webp&s=7a992a9610e6cf368f81bbdaa6c125c751b9e581",
    alt: "Walnut-paneled listening room with blue speaker system and vinyl art",
    caption: "Sound as furniture",
  },
  {
    src: "https://cdn.mos.cms.futurecdn.net/2K9skTnBYxYdJXTTtECyFG.jpg",
    alt: "Sculptural sunken listening room with curved walls and towering speakers",
    caption: "The temple",
  },
];

// Organic layout positions — each image gets unique placement
const layouts = [
  // Image 1: Large, top-left hero
  "col-span-2 row-span-2",
  // Image 2: Smaller, offset right
  "col-start-3 row-start-1",
  // Image 3: Wide, middle band
  "col-span-2 col-start-2 row-start-3",
  // Image 4: Smaller, left offset
  "col-start-1 row-start-3",
  // Image 5: Full width cinematic
  "col-span-3 row-start-4",
];

export default function Inspiration() {
  return (
    <section className="py-32 px-6 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto mb-20">
          <div className="w-12 h-1 bg-red mb-10" />
          <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-red mb-8">
            Inspiration
          </p>
          <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] text-black mb-8">
            The rooms, rituals, and references that guide us.
          </h2>
          <p className="text-base font-light leading-[1.9] text-charcoal">
            Little Menace draws from Japanese listening room culture, the warmth
            of great coffee shops, the intimacy of small bars, and the
            reverence that comes from sitting with music that deserves your full
            attention.
          </p>
        </div>

        {/* Organic scattered gallery */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-12 md:gap-5 md:auto-rows-[280px]">
          {inspirations.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${getGridClass(i)}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              {/* Persistent subtle gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              {/* Caption — always visible, subtle */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-white/90 text-[0.7rem] sm:text-[0.75rem] font-medium tracking-[0.2em] uppercase drop-shadow-md">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[0.8rem] font-light text-warm-gray leading-[1.8] max-w-[500px] mx-auto">
            This is a living collection. As we build, our inspiration evolves.
          </p>
        </div>
      </div>
    </section>
  );
}

// Varied grid placements for organic feel
function getGridClass(index: number): string {
  const classes = [
    // 1: Large hero — spans 7 cols, 2 rows
    "md:col-span-7 md:row-span-2 rounded-sm",
    // 2: Tall vertical — 5 cols, 2 rows, offset
    "md:col-span-5 md:row-span-2 rounded-sm",
    // 3: Wide cinematic — 5 cols
    "md:col-span-5 md:row-span-1 rounded-sm",
    // 4: Square-ish — 4 cols
    "md:col-span-4 md:row-span-1 rounded-sm",
    // 5: Remaining — 3 cols
    "md:col-span-3 md:row-span-1 rounded-sm",
  ];
  return classes[index % classes.length];
}
