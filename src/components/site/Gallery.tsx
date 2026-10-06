```tsx
import { useState } from "react";
import { ArrowRight, Folder, Image, X } from "lucide-react";

type GalleryCategory = {
  name: string;
  description: string;
};

const categories: GalleryCategory[] = [
  {
    name: "Adambakkam",
    description: "Photos from ministry meetings and gatherings in Adambakkam.",
  },
  {
    name: "Baptism",
    description: "Moments from baptism services and celebrations.",
  },
  {
    name: "Community Outreach",
    description: "Moments from community outreach and ministry activities.",
  },
  {
    name: "Cuddalore",
    description: "Photos from ministry meetings and outreach in Cuddalore.",
  },
  {
    name: "Other Meetings",
    description: "Special meetings, gatherings, conventions, and ministry events.",
  },
  {
    name: "Tirunelveli",
    description: "Photos from ministry meetings and gatherings in Tirunelveli.",
  },
  {
    name: "Trichy",
    description: "Photos from ministry meetings and gatherings in Trichy.",
  },
  {
    name: "Vellore",
    description: "Photos from ministry meetings and gatherings in Vellore.",
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ivory py-16 lg:py-24"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -left-28 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-soft-blue/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            <Image className="h-3.5 w-3.5 text-gold" />
            Moments of Grace &amp; Glory
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Ministry <span className="text-gold-gradient">Gallery</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Explore moments from our ministry, prayer gatherings, baptisms,
            outreach programs, meetings, and special events.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className="group relative rounded-2xl border border-slate/15 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold">
                  <Folder className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-slate/15 bg-soft-blue/30 px-3 py-1 text-[11px] font-semibold text-navy">
                  0 Photos
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-5 text-xl font-semibold text-navy">
                {category.name}
              </h3>

              <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-slate">
                {category.description}
              </p>

              {/* Button */}
              <button
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="mt-6 inline-flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:text-navy"
              >
                Open Gallery
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>

        {/* Gallery Popup */}
        {selectedCategory && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedCategory(null)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/40 bg-navy shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Popup Header */}
              <div className="flex items-center justify-between border-b border-ivory/10 px-6 py-5 sm:px-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Ministry Gallery
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-ivory sm:text-3xl">
                    {selectedCategory.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold"
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Empty Gallery */}
              <div className="p-6 sm:p-7">
                <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-gold/30 bg-deep/50 px-6 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/60 text-gold">
                    <Image className="h-7 w-7" />
                  </div>

                  <h4 className="mt-6 text-xl font-semibold text-ivory">
                    Photos Coming Soon
                  </h4>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/60">
                    Photos from the {selectedCategory.name} ministry
                    activities will appear here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
```
