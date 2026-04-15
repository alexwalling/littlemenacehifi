const rules = [
  {
    number: "1",
    title: "Be present.",
    body: "Put your phone away. You can snap a photo of the space, reply to a quick message, whatever. But if you're sat on your phone scrolling, you're missing the point. The music and community are better than your feed. We promise.",
  },
  {
    number: "2",
    title: "No assholes.",
    body: "Simple. If you can't be decent to the people around you, this isn't your room. We don't care who you are, what you do, or what you listen to. Just be a good human.",
  },
  {
    number: "3",
    title: "Everyone's a friend.",
    body: "The person next to you might be a teacher, a chef, a DJ, or someone who just wandered in. Doesn't matter. If you're at Little Menace, you're one of us. Please feel free to introduce yourself.",
  },
  {
    number: "4",
    title: "Respect the session.",
    body: "When someone's spinning a set, let it breathe. Save the requests. Save the \"can you play...\" for later. The person at the decks chose those records for a reason. Trust the experience.",
  },
  {
    number: "5",
    title: "Leave it better.",
    body: "This space belongs to everyone who comes in. Treat it like your own. Treat the records, the speakers, the furniture, and each other with care. We're building something here. Help us keep it beautiful.",
  },
];

export default function HouseRules() {
  return (
    <section
      id="house-rules"
      className="py-32 px-8 max-w-[800px] mx-auto"
    >
      {/* Red accent bar */}
      <div className="w-12 h-1 bg-red mb-10" />
      <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-red mb-8">
        House Rules
      </p>
      <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.2] mb-8 text-black">
        How we do things around here.
      </h2>
      <p className="text-base font-light leading-[1.9] text-charcoal mb-0">
        These aren&apos;t rules to be difficult... They exist because the best
        rooms have a shared understanding. This is ours.
      </p>

      <div className="mt-12 border-t border-black/10">
        {rules.map((rule) => (
          <div
            key={rule.number}
            className="py-8 border-b border-black/10 grid grid-cols-[3rem_1fr] gap-6 items-start max-sm:grid-cols-[2.5rem_1fr] max-sm:gap-4"
          >
            <span className="font-playfair text-2xl font-normal text-red leading-[1.4]">
              {rule.number}
            </span>
            <div>
              <h3 className="font-playfair text-[1.1rem] font-medium mb-2 text-black">
                {rule.title}
              </h3>
              <p className="text-[0.9rem] text-warm-gray leading-[1.7] mb-0">
                {rule.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
