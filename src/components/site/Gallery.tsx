import { useState } from "react";
import { Camera, Eye, MapPin, Sparkles, Tag, X } from "lucide-react";
import pastorPhoto from "@/assets/pastor_photo.jpeg";
import crowd from "@/assets/crowd.jpg";
import prayer from "@/assets/focus-prayer.jpg";
import deliverance from "@/assets/focus-deliverance.jpg";
import healing from "@/assets/focus-healing.jpg";
import restoration from "@/assets/focus-restoration.jpg";
import mountains from "@/assets/mountains.jpg";
import sky from "@/assets/hero-sky.jpg";

type Category = "all" | "worship" | "deliverance" | "prayer" | "outreach";

interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  tag: string;
  location: string;
  description: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    id: "pastor-preaching",
    title: "Pastor Stanley Suresh Ministering the Word",
    category: "worship",
    categoryLabel: "Worship & Conventions",
    tag: "Apostolic Preaching",
    location: "Main Auditorium, Chennai",
    description: "Declaring the uncompromised Word of God with boldness, love, and divine authority.",
    image: pastorPhoto,
  },
  {
    id: "mass-worship",
    title: "United Multitudes in Worship",
    category: "worship",
    categoryLabel: "Worship & Conventions",
    tag: "Praise & Thanksgiving",
    location: "Annual Prayer Convention",
    description: "Believers raising holy hands in surrendered adoration, feeling the tangible presence of the Holy Spirit.",
    image: crowd,
  },
  {
    id: "altar-prayer",
    title: "Altar Intercession & Fervent Prayer",
    category: "prayer",
    categoryLabel: "Intercession & Prayer",
    tag: "Deep Intercession",
    location: "Weekly Miracle Gathering",
    description: "Kneeling at the altar with opened Scriptures, bringing every petition before the throne of grace.",
    image: prayer,
  },
  {
    id: "chains-broken",
    title: "Yokes Shattered & Deliverance",
    category: "deliverance",
    categoryLabel: "Deliverance & Healing",
    tag: "Supernatural Freedom",
    location: "Special Deliverance Service",
    description: "Testifying to chains broken and spiritual darkness fleeing in the mighty name of Jesus Christ.",
    image: deliverance,
  },
  {
    id: "word-light",
    title: "Divine Truth & Scripture Exposition",
    category: "deliverance",
    categoryLabel: "Deliverance & Healing",
    tag: "Living Word",
    location: "Bible Study & Ministry Training",
    description: "Imparting spiritual wisdom and revelation that illuminates pathways and heals weary souls.",
    image: healing,
  },
  {
    id: "family-renewed",
    title: "Families Restored & Reconciled",
    category: "deliverance",
    categoryLabel: "Deliverance & Healing",
    tag: "Generational Blessing",
    location: "Thanksgiving & Family Meeting",
    description: "Joyful celebrations of restored marriages, reconciled children, and renewed peace in homes.",
    image: restoration,
  },
  {
    id: "mountain-prayer",
    title: "Dawn Prayer Retreat on the Mount",
    category: "prayer",
    categoryLabel: "Intercession & Prayer",
    tag: "Spiritual Retreat",
    location: "Prayer Mountain, Tamil Nadu",
    description: "Waiting quietly upon the Lord at break of day for spiritual strength, direction, and revival.",
    image: mountains,
  },
  {
    id: "heavenly-revival",
    title: "Atmosphere of Heaven & Divine Glory",
    category: "worship",
    categoryLabel: "Worship & Conventions",
    tag: "Divine Encounter",
    location: "Open Air Gospel Crusade",
    description: "Looking unto Jesus, the author and finisher of our faith, under the open canopy of divine favor.",
    image: sky,
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all" ? items : items.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative overflow-hidden bg-ivory py-16 lg:py-24">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -left-28 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-soft-blue/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-navy uppercase">
            <Camera className="h-3.5 w-3.5 text-gold" />
            Moments of Grace &amp; Glory
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Ministry <span className="text-gold-gradient">Gallery</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Witnessing the mighty hand of God at work through prayer conventions, life-changing deliverance services,
            fervent worship gatherings, and community missions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { key: "all", label: "All Moments" },
            { key: "worship", label: "Worship & Conventions" },
            { key: "deliverance", label: "Deliverance & Healing" },
            { key: "prayer", label: "Intercession & Prayer" },
          ].map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key as Category)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-navy text-gold shadow-md ring-1 ring-gold/40 scale-105"
                  : "bg-white text-slate hover:bg-soft-blue/50 hover:text-navy border border-slate/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate/15 bg-navy shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-gold"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-deep">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

                {/* Top Badge */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-deep/80 px-2.5 py-1 text-[11px] font-semibold text-gold backdrop-blur-md border border-gold/30">
                  <Tag className="h-3 w-3" />
                  {item.tag}
                </div>

                {/* Click to expand hover hint */}
                <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-deep/70 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm border border-ivory/20">
                  <Eye className="h-4 w-4" />
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-4 bg-navy text-ivory">
                <div className="flex items-center gap-1.5 text-[11px] text-gold/90">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="mt-1 text-sm font-bold text-ivory line-clamp-1 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-ivory/70 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-gold/40 bg-navy shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-deep/80 text-ivory hover:text-gold border border-ivory/20 transition-colors"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[60vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[60vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-navy text-ivory">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold border border-gold/30">
                    {selectedItem.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-ivory/70">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    {selectedItem.location}
                  </div>
                </div>

                <h3 className="mt-3 text-xl font-bold text-ivory sm:text-2xl">{selectedItem.title}</h3>
                <p className="mt-2 text-sm text-ivory/80 leading-relaxed">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
