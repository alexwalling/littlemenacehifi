import Image from "next/image";

const inspirations = [
  // Alex's picks
  {
    src: "https://www.insidehook.com/wp-content/uploads/2023/05/eavesdrop-e1707936765480.jpeg?fit=1200%2C800",
    alt: "Listening lounge with warm lighting, vinyl collection, and slatted wood paneling",
    caption: "Golden hour listening",
    span: "row-span-2",
  },
  {
    src: "https://www.insidehook.com/wp-content/uploads/2024/02/DSC_5634-2.jpg?w=1500",
    alt: "Tube amplifier and reel-to-reel with vinyl and spirits",
    caption: "The analog altar",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt: "Coffee pour-over in warm light",
    caption: "Coffee as craft",
    span: "",
  },
  {
    src: "https://venetosecrets.com/wp-content/uploads/2020/06/Venyer-Sommacampagna-Veneto-Secrets.jpg",
    alt: "Moody cocktail bar with vinyl records, gold speakers, and velvet seating",
    caption: "Records meet cocktails",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    alt: "Hands browsing through vinyl records",
    caption: "The dig",
    span: "",
  },
  {
    src: "https://preview.redd.it/home-listening-room-build-v0-rlsphm23e2bc1.jpeg?width=1080&crop=smart&auto=webp&s=7a992a9610e6cf368f81bbdaa6c125c751b9e581",
    alt: "Walnut-paneled listening room with blue speaker system and vinyl art",
    caption: "Sound as furniture",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558584673-c834fb1cc3b1?w=800&q=80",
    alt: "Vinyl record on turntable",
    caption: "The ritual",
    span: "",
  },
  {
    src: "https://cdn.mos.cms.futurecdn.net/2K9skTnBYxYdJXTTtECyFG.jpg",
    alt: "Sculptural sunken listening room with curved walls and towering speakers",
    caption: "The temple",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
    alt: "Warm ambient bar interior",
    caption: "Warm materials, warm light",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80",
    alt: "Minimalist cafe interior",
    caption: "Intentional space",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    alt: "Jazz musician performing in intimate setting",
    caption: "Intimate sessions",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    alt: "DJ mixing records",
    caption: "Curated sets",
    span: "",
  },
];

export default function Inspiration() {
  return (
    <section className="py-32 px-6 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto mb-16">
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

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {inspirations.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={item.span ? 800 : 400}
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                <p className="p-5 text-cream text-[0.8rem] font-medium tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[0.8rem] font-light text-warm-gray leading-[1.8] max-w-[500px] mx-auto">
            This is a living collection. As we build, our inspiration evolves.
            If you see something that belongs here, we want to hear about it.
          </p>
        </div>
      </div>
    </section>
  );
}
