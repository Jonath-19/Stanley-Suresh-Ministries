import { useState } from "react";
import { ArrowLeft, ArrowRight, Folder, Image, X } from "lucide-react";

type GalleryCategory = {
  name: string;
  description: string;
  photos: string[];
};

const categories: GalleryCategory[] = [
  {
  name: "Adambakkam",
  description: "Photos from ministry meetings and gatherings in Adambakkam.",
  photos: [
    "/gallery/adambakkam/20221015_105346.jpg",
    "/gallery/adambakkam/20221015_105352.jpg",
    "/gallery/adambakkam/20221015_105447.jpg",
  ],
},
  {
  name: "Baptism",
  description: "Moments from baptism services and celebrations.",
  photos: [
    "/gallery/baptism/20220419_103157.jpg",
    "/gallery/baptism/20220621_113637.jpg",
    "/gallery/baptism/20230303_105149.jpg",
    "/gallery/baptism/20230905_113336.jpg",
    "/gallery/baptism/20240130_110811.jpg",
  ],
},
  {
    name: "Community Outreach",
    description: "Moments from community outreach and ministry activities.",
    photos: [],
  },
  {
  name: "Cuddalore",
  description: "Photos from ministry meetings and outreach in Cuddalore.",
  photos: [
    "/gallery/cuddalore/204f4307-4b83-4b5d-a61e-58ccde8b8cb1.jpg",
    "/gallery/cuddalore/362b350d-f19d-4ca0-b18d-b0241021e3c7.jpg",
    "/gallery/cuddalore/000672c8-65b3-467d-996d-db34ada4daa3.jpg",
    "/gallery/cuddalore/806324bf-6434-4fcc-b3ac-7152f78fcf9b.jpg",
  ],
},
  {
  name: "Other Meetings",
  description: "Special meetings, gatherings, conventions, and ministry events.",
  photos: [
    "/gallery/other-meetings/20231227_193701.jpg",
    "/gallery/other-meetings/20260403_124045.jpg",
    "/gallery/other-meetings/20260403_124052.jpg",
    "/gallery/other-meetings/20260417_193622.jpg",
    "/gallery/other-meetings/20260417_193629.jpg",
  ],
},
  {
  name: "Tirunelveli",
  description: "Photos from ministry meetings and gatherings in Tirunelveli.",
  photos: [
    "/gallery/tirunelveli/IMG_4368.JPG",
    "/gallery/tirunelveli/IMG_4378.JPG",
  ],
},
  {
    name: "Trichy",
    description: "Photos from ministry meetings and gatherings in Trichy.",
    photos: [],
  },
  {
    name: "Vellore",
    description: "Photos from ministry meetings and gatherings in Vellore.",
    photos: [],
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
                  {category.photos.length}{" "}
                  {category.photos.length === 1 ? "Photo" : "Photos"}
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
            onClick={() => {
              setSelectedCategory(null);
              setSelectedPhoto(null);
            }}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-gold/40 bg-navy shadow-2xl"
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

                  <p className="mt-1 text-sm text-ivory/60">
                    {selectedCategory.photos.length}{" "}
                    {selectedCategory.photos.length === 1
                      ? "photo"
                      : "photos"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPhoto(null);
                  }}
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-gold hover:text-gold"
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Photos */}
              <div className="max-h-[calc(90vh-120px)] overflow-y-auto p-6 sm:p-7">
                {selectedCategory.photos.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {selectedCategory.photos.map((photo, index) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => setSelectedPhoto(photo)}
                        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-ivory/10 bg-deep"
                      >
                        <img
                          src={photo}
                          alt={`${selectedCategory.name} ministry photo ${
                            index + 1
                          }`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                      </button>
                    ))}
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        )}

        {/* Full-size Photo Viewer */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-5 top-5 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/30 bg-black/50 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Close photo"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={selectedPhoto}
              alt="Ministry gallery"
              className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
