import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Image as ImageIcon,
  X,
} from "lucide-react";

interface GalleryPhoto {
  src: string;
  title?: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  photos: GalleryPhoto[];
}

const categories: GalleryCategory[] = [
  {
    id: "adambakkam",
    name: "Adambakkam",
    description: "Photos from ministry meetings and gatherings in Adambakkam.",
    photos: [],
  },
  {
    id: "baptism",
    name: "Baptism",
    description: "Moments from baptism services and celebrations.",
    photos: [],
  },
  {
    id: "community-outreach",
    name: "Community Outreach",
    description: "Moments from community outreach and ministry activities.",
    photos: [],
  },
  {
    id: "cuddalore",
    name: "Cuddalore",
    description: "Photos from ministry meetings and outreach in Cuddalore.",
    photos: [],
  },
  {
    id: "other-meetings",
    name: "Other Meetings",
    description: "Special meetings, gatherings, conventions, and ministry events.",
    photos: [],
  },
  {
    id: "tirunelveli",
    name: "Tirunelveli",
    description: "Photos from ministry meetings and gatherings in Tirunelveli.",
    photos: [],
  },
  {
    id: "trichy",
    name: "Trichy",
    description: "Photos from ministry meetings and gatherings in Trichy.",
    photos: [],
  },
  {
    id: "vellore",
    name: "Vellore",
    description: "Photos from ministry meetings and gatherings in Vellore.",
    photos: [],
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const selectedPhoto =
    selectedCategory?.photos[selectedPhotoIndex] ?? null;

  const openCategory = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setSelectedPhotoIndex(0);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
    setSelectedPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (!selectedCategory || selectedCategory.photos.length === 0) return;

    setSelectedPhotoIndex((current) =>
      current === selectedCategory.photos.length - 1 ? 0 : current + 1
    );
  };

  const previousPhoto = () => {
    if (!selectedCategory || selectedCategory.photos.length === 0) return;

    setSelectedPhotoIndex((current) =>
      current === 0
        ? selectedCategory.photos.length - 1
        : current - 1
    );
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ivory py-16 lg:py-24"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-soft-blue/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-navy">
            <ImageIcon className="h-3.5 w-3.5 text-gold" />
            Moments of Grace &amp; Glory
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Ministry{" "}
            <span className="text-gold-gradient">Gallery</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Explore moments from our ministry, prayer gatherings,
            baptisms, outreach programs, meetings, and special events.
          </p>
        </div>

        {/* Folder Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => openCategory(category)}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold"
            >
              {/* Folder icon */}
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy">
                  <FolderOpen className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-navy/10 bg-soft-blue/40 px-3 py-1 text-[11px] font-semibold text-navy">
                  {category.photos.length}{" "}
                  {category.photos.length === 1 ? "Photo" : "Photos"}
                </span>
              </div>

              {/* Folder name */}
              <h3 className="mt-5 text-xl font-semibold text-navy transition-colors group-hover:text-gold">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate">
                {category.description}
              </p>

              {/* Open indicator */}
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <span>Open Gallery</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Category Gallery Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/90 px-4 py-6 backdrop-blur-md"
          onClick={closeCategory}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-gold/30 bg-navy shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4 sm:px-7">
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
                onClick={closeCategory}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ivory/20 bg-deep/70 text-ivory transition-colors hover:border-gold hover:text-gold"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Photos */}
            <div className="max-h-[calc(90vh-90px)] overflow-y-auto p-5 sm:p-7">
              {selectedCategory.photos.length === 0 ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-gold/30 bg-deep/40 px-6 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <ImageIcon className="h-7 w-7" />
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-ivory">
                    Photos Coming Soon
                  </h4>

                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/65">
                    Photos from the {selectedCategory.name} ministry
                    activities will appear here.
                  </p>
                </div>
              ) : (
                <>
                  {/* Main Photo */}
                  {selectedPhoto && (
                    <div className="relative overflow-hidden rounded-xl bg-black">
                      <img
                        src={selectedPhoto.src}
                        alt={
                          selectedPhoto.title ??
                          `${selectedCategory.name} ministry photo`
                        }
                        className="mx-auto max-h-[60vh] w-full object-contain"
                      />

                      {selectedCategory.photos.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={previousPhoto}
                            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-deep/80 text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
                            aria-label="Previous photo"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <button
                            type="button"
                            onClick={nextPhoto}
                            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-deep/80 text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
                            aria-label="Next photo"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  {/* Photo count */}
                  <div className="mt-4 text-center text-xs text-ivory/60">
                    {selectedPhotoIndex + 1} of{" "}
                    {selectedCategory.photos.length}
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
                    {selectedCategory.photos.map((photo, index) => (
                      <button
                        key={`${photo.src}-${index}`}
                        type="button"
                        onClick={() => setSelectedPhotoIndex(index)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                          index === selectedPhotoIndex
                            ? "border-gold ring-2 ring-gold/20"
                            : "border-transparent opacity-70 hover:border-gold/50 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={photo.src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
