import { ArrowRight, BookOpen, HandHeart, Link2Off, Sunrise } from "lucide-react";
import prayer from "@/assets/focus-prayer.jpg";
import deliverance from "@/assets/focus-deliverance.jpg";
import healing from "@/assets/focus-healing.jpg";
import restoration from "@/assets/focus-restoration.jpg";

const cards = [
  { title: "Prayer", img: prayer, icon: HandHeart, text: "A place to bring your needs, burdens, and concerns before God.", cta: "Request Prayer", href: "#prayer-request", solid: true },
  { title: "Deliverance", img: deliverance, icon: Link2Off, text: "Prayer and spiritual support centered on freedom and a deeper walk with Christ.", cta: "Learn More", href: "#schedule", solid: false },
  { title: "Healing", img: healing, icon: BookOpen, text: "Encouragement to seek God through faith and prayer during difficult seasons.", cta: "Request Prayer", href: "#prayer-request", solid: true },
  { title: "Restoration", img: restoration, icon: Sunrise, text: "Supporting individuals and families as they seek hope, renewal, and a closer relationship with God." },
];

export function MinistryFocus() {
  return (
    <section id="focus" className="bg-navy-gradient text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold">Our Focus</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Prayer. Deliverance. <span className="text-gold">Healing.</span> Restoration.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory/80 md:text-right">
            A ministry centered on helping people seek God through prayer, faith, Scripture, and spiritual encouragement.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-lg border border-ivory/15 bg-deep/60 shadow-card">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={992} height={672} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex gap-3 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/70 text-gold">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/80">{c.text}</p>
                  {c.cta && (
                    <a href={c.href} className={`mt-4 ${c.solid ? "btn-gold !px-5 !py-2" : "btn-outline-gold !py-2"}`}>
                      {c.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
