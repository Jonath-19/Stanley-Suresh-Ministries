import { ArrowRight } from "lucide-react";
import prayer from "@/assets/focus-prayer.jpg";

export function PrayerRequest() {
  return (
    <section id="prayer-request" className="relative isolate overflow-hidden bg-navy py-16 text-center text-ivory">
      <img src={prayer} alt="" loading="lazy" width={992} height={672} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-navy/80 to-deep" />
      <p className="eyebrow text-gold">Prayer Request</p>
      <h2 className="mt-3 text-4xl md:text-5xl">Need Prayer?</h2>
      <p className="mt-3 font-display text-xl italic text-gold-hi">You don't have to walk alone.</p>
      <a href="#contact" className="btn-gold mt-8">Request Prayer <ArrowRight className="h-4 w-4" /></a>
    </section>
  );
}
