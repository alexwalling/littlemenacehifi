const phases = [
  {
    label: "Phase One",
    status: "First",
    upcoming: false,
    title: "Coffee Shop & Listening Room",
    description:
      "The foundation. High-end hi-fi speakers, a curated vinyl library, and specialty coffee. A space to sit, listen, and slow down.",
    items: [
      "Reference-grade hi-fi system",
      "Specialty coffee program with local roasters",
      "Curated vinyl sessions, morning through evening",
      "Intimate seating designed for listening",
      "Light pastries and snacks",
    ],
  },
  {
    label: "Phase Two",
    status: "Upcoming",
    upcoming: true,
    title: "Record Store",
    description:
      "A curated selection of new and vintage vinyl. Not a warehouse. A collection, chosen with the same intention as the listening room sessions.",
    items: [
      "Curated new releases and reissues",
      "Vintage vinyl, hand-selected",
      "Staff picks and guest curator selections",
      "Listening stations to preview before you buy",
    ],
  },
  {
    label: "Phase Three",
    status: "Upcoming",
    upcoming: true,
    title: "Speakers & Wine Bar",
    description:
      "The full picture. A curated selection of speakers and hi-fi gear for your home, paired with a natural wine bar for evening listening sessions.",
    items: [
      "Curated speakers and hi-fi equipment for home",
      "Natural and biodynamic wine selection",
      "Evening listening sessions with guest DJs",
      "Private listening appointments for gear demos",
      "Speaker workshops and setup consultations",
    ],
  },
];

export default function Phases() {
  return (
    <section
      id="the-plan"
      className="py-32 px-8 max-w-[800px] mx-auto"
    >
      <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-red mb-8">
        The Plan
      </p>
      <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] mb-8 text-black">
        We&apos;re building this in stages.
      </h2>
      <p className="text-base font-light leading-[1.9] text-charcoal">
        Little Menace isn&apos;t trying to be everything on day one. We&apos;re
        starting with what matters most and growing into the rest. Here&apos;s
        where we&apos;re headed.
      </p>

      <div className="mt-12">
        {phases.map((phase, i) => (
          <div
            key={phase.label}
            className={`py-12 grid grid-cols-[140px_1fr] gap-8 items-start max-sm:grid-cols-1 max-sm:gap-2 ${
              i < phases.length - 1 ? "border-b border-black/[0.08]" : ""
            }`}
          >
            <div>
              <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-red pt-1">
                {phase.label}
              </p>
              <span
                className={`inline-block mt-2 text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1 border rounded-[2px] ${
                  phase.upcoming
                    ? "border-warm-gray-light text-warm-gray-light"
                    : "border-red text-red"
                }`}
              >
                {phase.status}
              </span>
            </div>
            <div>
              <h3 className="font-playfair text-[1.4rem] font-normal mb-4 text-black">
                {phase.title}
              </h3>
              <p className="text-[0.95rem] text-warm-gray mb-3 leading-[1.8]">
                {phase.description}
              </p>
              <ul className="list-none p-0">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.9rem] text-warm-gray py-[0.4rem] pl-5 relative leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-[0.85rem] before:w-1 before:h-1 before:bg-red before:rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
