import { ArrowRight, Flame, Globe, HandHeart, HeartHandshake, Monitor, ShieldCheck, Sparkles, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "12+ Years",
    title: "Continuous Prayer Ministry",
    sub: "Serving faithfully in Chennai and across India since 2012",
  },
  {
    icon: Monitor,
    number: "10,000+",
    title: "Lives Touched Globally",
    sub: "Through live prayer streams, conventions, and personal counseling",
  },
  {
    icon: HandHeart,
    number: "Kanmalai Charitable Trust",
    title: "Community Outreach",
    sub: "Delivering real help to children, the elderly, and those in distress",
  },
  {
    icon: Flame,
    number: "24/7 Prayer",
    title: "Intercessory Covering",
    sub: "Standing steadfast in the gap for every cry, petition, and breakthrough",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Deliverance",
    verse: "Luke 4:18",
    description:
      "Breaking spiritual yokes, heavy burdens, and demonic strongholds through the supreme authority in the name of Jesus Christ.",
  },
  {
    icon: Sparkles,
    title: "Healing",
    verse: "Isaiah 53:5",
    description:
      "Trusting God's supernatural power for physical, emotional, and inner healing. What is impossible with man is possible with God.",
  },
  {
    icon: HeartHandshake,
    title: "Restoration",
    verse: "Joel 2:25",
    description:
      "Rebuilding broken families, restoring lost years, and guiding hearts into their God-given destiny, spiritual joy, and peace.",
  },
];

export function MinistryIntro() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-16 lg:py-24">
      {/* Decorative subtle background accents */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-soft-blue/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-navy uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            About Stanley Suresh Ministries
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            A Ministry Built on <span className="text-gold-gradient">Unceasing Prayer</span> &amp; Faith
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Since 2012, Stanley Suresh Ministries has stood as a beacon of hope, bringing the transformative power of
            the Gospel to individuals and families seeking freedom, healing, and spiritual renewal.
          </p>
        </div>

        {/* Narrative & Calling */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="rounded-2xl border border-gold/20 bg-card p-8 shadow-card lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <p className="eyebrow text-gold font-bold">Our Calling &amp; Vision</p>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
              Proclaiming Freedom to the Captives and Life in Abundance
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate sm:text-base">
              <p>
                What began with intimate prayer gatherings has blossomed through divine grace into a widespread
                movement of faith. Pastor Stanley Suresh operates under an apostolic burden to minister to the weary,
                intercede for the suffering, and preach the undiluted truth of Jesus Christ.
              </p>
              <p>
                Whether in packed conventions, online prayer broadcasts, personal deliverance sessions, or charitable
                outreaches through the Kanmalai Charitable Trust, our heart remains single-minded:{" "}
                <strong className="text-navy font-semibold">
                  to exalt Christ and see every soul walk in spiritual victory.
                </strong>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 pt-2 border-t border-slate/10">
              <a href="/about" className="btn-gold">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>

              <a href="#prayer-request" className="btn-outline-navy">
                Request Personal Prayer
              </a>
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-4 lg:col-span-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-xl border border-slate/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy text-gold shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-navy">{p.title}</h4>
                      <span className="text-xs font-semibold tracking-wider text-gold-hi uppercase bg-navy/90 px-2 py-0.5 rounded">
                        {p.verse}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate sm:text-sm">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-xl border border-gold/15 bg-card p-6 shadow-card transition-all duration-200 hover:border-gold/50"
            >
              <div className="flex items-center justify-between">
                <s.icon className="h-8 w-8 text-gold" />
                <span className="text-xl font-bold tracking-tight text-navy">{s.number}</span>
              </div>
              <p className="mt-4 text-base font-semibold text-navy">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Scripture Citation Banner */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-navy-gradient p-8 text-center text-ivory shadow-card ring-1 ring-gold/30">
          <p className="eyebrow text-gold font-bold">Divine Promise</p>
          <blockquote className="mt-3 font-display text-lg italic sm:text-2xl text-ivory/95 max-w-4xl mx-auto">
            “The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty to the captives...”
          </blockquote>
          <cite className="mt-3 block text-sm font-semibold tracking-wider text-gold not-italic">
            — Isaiah 61:1
          </cite>
        </div>
      </div>
    </section >
  );
}
