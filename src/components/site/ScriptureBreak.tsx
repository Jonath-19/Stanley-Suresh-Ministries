import mountains from "@/assets/mountains.jpg";

export function ScriptureBreak() {
  return (
    <section className="relative isolate overflow-hidden py-20 text-center">
      <img src={mountains} alt="" loading="lazy" width={1920} height={640} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/30 to-navy/70" />
      <blockquote className="mx-auto max-w-3xl px-5">
        <p className="font-display text-3xl leading-tight text-ivory md:text-4xl">
          “And ye shall know the truth,
          <br />
          and the truth shall make you free.”
        </p>
        <cite className="mt-4 flex items-center justify-center gap-4 text-sm not-italic text-ivory">
          <span className="h-px w-16 bg-gold" /> John 8:32 <span className="h-px w-16 bg-gold" />
        </cite>
      </blockquote>
    </section>
  );
}
