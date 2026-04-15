"use client";

import Image from "next/image";

const inspirations = [
  {
    src: "https://cdn.mos.cms.futurecdn.net/2K9skTnBYxYdJXTTtECyFG-1920-80.jpg.webp",
    alt: "Retro-futurist sunken listening lounge with walnut paneling and sculptural ceiling",
    caption: "The temple",
  },
  {
    src: "https://www.cooperhewitt.org/wp-content/uploads/2025/12/DevonTurnbull_CH_1_WebBanner.jpg",
    alt: "Monumental horn speakers and tube amplifiers in ornate gilded hall",
    caption: "Sound as devotion",
  },
  {
    src: "https://i.redd.it/gm387jkrmfgd1.png",
    alt: "Minimalist hi-fi altar with JBL speakers, reel-to-reel, and vinyl on concrete plinth",
    caption: "The altar",
  },
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
    src: "https://static.dezeen.com/uploads/2025/02/silence-please-cafe-new-york-city_dezeen_2364_col_8-1704x2556.jpg",
    alt: "Industrial listening room with horn speakers, Togo sofas, and exposed brick",
    caption: "",
  },
  {
    src: "https://media.timeout.com/images/106002072/1920/1080/image.webp",
    alt: "Intimate bar or listening room interior",
    caption: "",
  },
  {
    src: "https://i0.wp.com/www.cityandsee.com/wp-content/uploads/2017/09/1A2F9D92-1AC6-4EF5-A828-84099CEA8D86.jpg?w=1334&ssl=1",
    alt: "Japanese kissaten or listening bar interior",
    caption: "",
  },
  {
    src: "https://i0.wp.com/www.cityandsee.com/wp-content/uploads/2018/01/IMG_4335.jpg?w=2160&ssl=1",
    alt: "Japanese kissaten or listening bar interior",
    caption: "",
  },
];

// Organic asymmetric grid — each position is hand-placed
const gridClasses = [
  "md:col-span-6 md:row-span-2",   // 1: Hero wide+tall
  "md:col-span-6 md:row-span-2",   // 2: Tall right
  "md:col-span-5 md:row-span-1",   // 3: Medium
  "md:col-span-7 md:row-span-1",   // 4: Wide
  "md:col-span-4 md:row-span-1",   // 5: Compact
  "md:col-span-4 md:row-span-1",   // 6: Compact
  "md:col-span-4 md:row-span-2",   // 7: Tall
  "md:col-span-4 md:row-span-2",   // 8: Tall
  "md:col-span-4 md:row-span-1",   // 9: Compact
  "md:col-span-5 md:row-span-1",   // 10: Medium
  "md:col-span-7 md:row-span-1",   // 11: Wide
];

export default function Inspiration() {
  return (
    <section className="py-32 px-6 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
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

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-3 md:auto-rows-[300px]">
          {inspirations.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${gridClasses[i] || "md:col-span-4"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="w-8 h-px bg-red mx-auto mb-6" />
          <p className="text-[0.8rem] font-light text-warm-gray leading-[1.8] max-w-[500px] mx-auto italic">
            This is a living collection. As we build, our inspiration evolves.
          </p>
        </div>
      </div>
    </section>
  );
}
