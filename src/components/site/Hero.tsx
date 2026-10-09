import { ArrowRight, PlayCircle } from "lucide-react";
import hero from "@/assets/hero-cinematic.jpg";
import heroMobile from "@/assets/hero-cinematic-mobile.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[900px] overflow-hidden bg-deep lg:min-h-[820px]"

    >
      {/* Complete cinematic hero artwork */}
      {/* Mobile hero artwork */}
      <img
        src={heroMobile}
        alt=""
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center lg:hidden"
      />

      {/* Desktop hero artwork */}
      <img
        src={hero}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-30 hidden h-full w-full object-cover object-center lg:block"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-deep/75 via-deep/25 to-deep/65 lg:bg-gradient-to-r lg:from-deep/45 lg:via-deep/15 lg:to-transparent" />

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-20 h-48 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />

      {/* HERO CONTENT */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[900px] max-w-7xl
          flex-col justify-start px-5 pb-36 pt-12
          sm:px-6 sm:pt-16
          lg:min-h-[820px] lg:justify-center lg:px-8 lg:pb-24 lg:pt-32
        "

      >
        <div className="max-w-xl lg:max-w-xl">
          <h1 className="text-[2.65rem] leading-[1.04] text-ivory sm:text-6xl lg:text-7xl">
            Hope. Prayer.
            <span className="mt-1 block text-gold-gradient">
              A Deeper Walk
            </span>
            <span className="block text-gold-gradient">
              With Christ.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/85">
            Welcome to Stanley Suresh Ministries — a ministry serving people
            through prayer, deliverance, Gospel ministry, spiritual
            encouragement, and community outreach.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#prayer-request" className="btn-gold">
              Request Prayer
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#sermons" className="btn-ghost-light">
              <PlayCircle className="h-5 w-5" />
              Watch Sermons
            </a>
          </div>

          <div className="mt-8 flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 font-display text-[10px] tracking-[0.15em] text-ivory/85 sm:mt-10 sm:gap-4 sm:text-xs sm:tracking-[0.3em]">
            <span className="h-px w-10 bg-gold" />
            DELIVERANCE
            <span className="text-gold">•</span>
            HEALING
            <span className="text-gold">•</span>
            RESTORATION
          </div>
        </div>
      </div>

      {/* JOHN 8:32 */}
<blockquote className="absolute bottom-24 right-12 z-10 hidden max-w-[300px] xl:block">
  <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-l from-black/80 via-black/50 to-transparent blur-md" />

  <span className="mb-3 block h-px w-10 bg-gold" />

  <p className="font-display text-xl leading-snug text-ivory drop-shadow-lg">
    “And ye shall know the truth, and the truth shall make you free.”
  </p>

  <cite className="mt-2 block text-sm not-italic text-ivory drop-shadow-md">
    John 8:32
  </cite>

  <span className="mt-3 block h-px w-10 bg-gold" />
</blockquote>

      {/* Wave transition */}
      <svg
        className="absolute inset-x-0 bottom-[-1px] z-20 h-16 w-full text-ivory"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,40 C320,90 640,0 960,30 C1180,50 1320,60 1440,20 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
