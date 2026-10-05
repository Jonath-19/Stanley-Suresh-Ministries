import { ArrowRight, PlayCircle } from "lucide-react";
import hero from "@/assets/hero-cinematic.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-deep lg:min-h-[820px]"
    >
      {/* Complete cinematic hero artwork */}
      <img
        src={hero}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-deep/45 via-deep/15 to-transparent" />

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 -z-20 h-48 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          max-w-7xl
          flex-col
          justify-center
          px-5
          pb-40
          pt-32
          md:pb-24
          lg:min-h-[820px]
          lg:px-8
        "
      >
        <div className="max-w-xl">
          <h1 className="text-5xl leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
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

          <div className="mt-10 flex items-center gap-4 font-display text-xs tracking-[0.3em] text-ivory/85">
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
      <blockquote className="absolute bottom-24 right-8 z-10 hidden max-w-[220px] xl:block">
        <span className="mb-3 block h-px w-10 bg-gold" />

        <p className="font-display text-lg leading-snug text-ivory">
          “And ye shall know the truth, and the truth shall make you free.”
        </p>

        <cite className="mt-2 block text-sm not-italic text-ivory/80">
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