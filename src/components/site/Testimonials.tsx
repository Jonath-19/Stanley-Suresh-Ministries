import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Quote,
  Send,
  Sparkles,
  Star,
  X,
} from "lucide-react";

interface Testimony {
  id: string;
  name: string;
  location: string;
  category: "all" | "healing" | "deliverance" | "family" | "breakthrough";
  categoryLabel: string;
  title: string;
  story: string;
  date: string;
  verified: boolean;
}

const testimonies: Testimony[] = [
  {
    id: "t1",
    name: "Bro. Samuel Rajendran",
    location: "Chennai, Tamil Nadu",
    category: "deliverance",
    categoryLabel: "Deliverance",
    title: "Delivered from 3 Years of Severe Anxiety & Fear",
    story:
      "For nearly three years, I was paralyzed by severe anxiety attacks and sleepless nights that affected my work and peace of mind. During one of Pastor Stanley Suresh's deliverance prayer meetings, as he laid hands and prayed in Jesus' name, I felt a heavy darkness physically lift off my chest. Today, our entire household lives in perfect peace.",
    date: "August 2026",
    verified: true,
  },
  {
    id: "t2",
    name: "Sis. Hannah Mary",
    location: "Coimbatore, Tamil Nadu",
    category: "healing",
    categoryLabel: "Divine Healing",
    title: "Healed from Chronic Pain After Online Prayer",
    story:
      "Doctors had advised long-term medication with little guarantee for recurring internal pain. I submitted an urgent prayer request through the website and joined the Friday live prayer stream. When Pastor prayed with deep burden for the sick, the fire of God touched me. Subsequent clinical scans showed complete normality!",
    date: "July 2026",
    verified: true,
  },
  {
    id: "t3",
    name: "Bro. David & Sis. Priya",
    location: "Bangalore, Karnataka",
    category: "family",
    categoryLabel: "Family Restoration",
    title: "Broken Marriage Restored by God's Grace",
    story:
      "Our marriage was on the verge of legal separation due to constant strife and misunderstandings. Through pastoral counseling and regular intercession from Stanley Suresh Ministries, God softened our hearts, broke the spirit of bitterness, and rekindled our love and dedication to Christ.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "t4",
    name: "Sis. Mercy Deborah",
    location: "Singapore",
    category: "breakthrough",
    categoryLabel: "Miracle Blessing",
    title: "Blessed with a Miracle Child After 6 Years",
    story:
      "After six years of marriage and repeated medical disappointments, we reached out to the ministry. Pastor Stanley Suresh stood in prayer agreement with us, claiming Psalm 113:9. God heard our cry and blessed us with a healthy baby boy. What man deemed impossible, God made possible!",
    date: "June 2026",
    verified: true,
  },
  {
    id: "t5",
    name: "Bro. Paul Varghese",
    location: "Madurai, Tamil Nadu",
    category: "deliverance",
    categoryLabel: "Deliverance",
    title: "Completely Liberated from 10 Years of Addiction",
    story:
      "I was trapped in deep addictions that destroyed my relationships and finances. When I attended the monthly miracle gathering, the power of God shook my life. I haven't touched any substance since that blessed day. Jesus truly sets the captive free!",
    date: "May 2026",
    verified: true,
  },
  {
    id: "t6",
    name: "Sis. Elizabeth Grace",
    location: "London, United Kingdom",
    category: "breakthrough",
    categoryLabel: "Spiritual Breakthrough",
    title: "Supernatural Breakthrough Across Borders",
    story:
      "Even from the UK, joining the online prayer ministry became our family's spiritual fortress. During an intense season of professional uncertainty, Pastor prayed with prophetic faith. Within days, closed doors opened and God granted an exceptional breakthrough beyond all expectations.",
    date: "September 2026",
    verified: true,
  },
];

export function Testimonials() {
  const [filter, setFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    city: "",
    category: "healing",
    title: "",
    story: "",
  });

  const filtered =
    filter === "all"
      ? testimonies
      : testimonies.filter((t) => t.category === filter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const { error } = await supabase.from("testimonials").insert([
      {
        full_name: formData.full_name.trim(),
        city: formData.city.trim(),
        category: formData.category,
        title: formData.title.trim(),
        story: formData.story.trim(),
        status: "pending",
      },
    ]);

    if (error) {
      console.error("Testimonial submission error:", error);

      setSubmitError(
        "We couldn't submit your testimony right now. Please try again."
      );

      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmitted(true);

    setFormData({
      full_name: "",
      city: "",
      category: "healing",
      title: "",
      story: "",
    });

    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 2200);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-soft-blue/30 py-16 lg:py-24"
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-soft-blue blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-navy uppercase">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Stories of God's Glory
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Testimonies of{" "}
            <span className="text-gold-gradient">Faith &amp; Miracles</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            “And they overcame him by the blood of the Lamb, and by the word
            of their testimony.” — Revelation 12:11
          </p>
        </div>

        {/* Filter & Action row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate/15 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: "all", label: "All Testimonies" },
              { key: "deliverance", label: "Deliverance" },
              { key: "healing", label: "Healing" },
              { key: "family", label: "Family Restoration" },
              { key: "breakthrough", label: "Breakthrough" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${filter === f.key
                    ? "bg-navy text-gold shadow-md ring-1 ring-gold/40"
                    : "border border-slate/15 bg-white text-slate hover:bg-white/80 hover:text-navy"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-gold !px-4 !py-2 text-xs cursor-pointer inline-flex items-center gap-2 shadow-sm"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Share Your Testimony
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-gold/20 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-gold"
            >
              <div>
                {/* Header: Stars & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  <span className="rounded-full border border-gold/30 bg-navy px-2.5 py-0.5 text-[11px] font-semibold text-gold">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Quote Icon & Title */}
                <div className="mt-4 flex items-start gap-3">
                  <Quote className="h-6 w-6 shrink-0 rotate-180 text-gold/40" />

                  <h3 className="text-base font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                </div>

                {/* Story */}
                <p className="mt-3 pl-9 text-xs leading-relaxed text-slate sm:text-sm">
                  {item.story}
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 flex items-center justify-between border-t border-slate/10 pt-4 pl-9">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-navy">{item.name}</p>

                    {item.verified && (
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-emerald-600"
                        aria-label="Verified Testimony"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate/80">
                    <MapPin className="h-3 w-3 text-gold" />
                    {item.location}
                  </div>
                </div>

                <span className="text-[10px] font-medium text-slate/60">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom encouragement callout */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-white p-6 shadow-card md:flex-row md:p-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-gold shadow-md">
              <HeartHandshake className="h-6 w-6" />
            </div>

            <div>
              <h4 className="text-lg font-bold text-navy">
                Has God Worked a Miracle in Your Life?
              </h4>

              <p className="text-xs text-slate sm:text-sm">
                Your testimony encourages thousands facing similar struggles.
                Share how God heard and answered your prayer.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-gold shrink-0 cursor-pointer"
          >
            Submit Testimony <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Modal: Share Testimony Form */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep/80 p-4 backdrop-blur-sm animate-in fade-in"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-gold/40 bg-white p-6 shadow-2xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-slate hover:bg-slate/10 hover:text-navy"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center">
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold/20 text-navy">
                  <MessageSquare className="h-6 w-6 text-gold" />
                </div>

                <h3 className="text-2xl font-bold text-navy">
                  Share Your Testimony
                </h3>

                <p className="mt-1 text-xs text-slate">
                  Give glory to God for what He has done in your life through
                  prayer.
                </p>
              </div>

              {/* Success Message */}
              {submitted ? (
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-800 animate-in zoom-in-95">
                  <CheckCircle2 className="mx-auto mb-2 h-12 w-12 text-emerald-600" />

                  <p className="text-base font-bold">
                    Thank you for sharing!
                  </p>

                  <p className="mt-1 text-xs text-emerald-700">
                    Your testimony has been received with gratitude and will
                    bless many souls.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                      Your Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="e.g. Bro. John Daniel"
                      value={formData.full_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          full_name: e.target.value,
                        })
                      }
                      className="mt-1 w-full rounded-md border border-slate/20 px-3.5 py-2 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  {/* City + Category */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                        City / Location
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="e.g. Chennai"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            city: e.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-md border border-slate/20 px-3.5 py-2 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                        Category
                      </label>

                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            category: e.target.value,
                          })
                        }
                        className="mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      >
                        <option value="healing">Divine Healing</option>
                        <option value="deliverance">Deliverance</option>
                        <option value="family">Family Restoration</option>
                        <option value="breakthrough">Breakthrough</option>
                      </select>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                      Title of Testimony
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="e.g. Delivered from heavy burden through prayer"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        })
                      }
                      className="mt-1 w-full rounded-md border border-slate/20 px-3.5 py-2 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  {/* Story */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                      Your Story
                    </label>

                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe the situation and how God intervened through prayer..."
                      value={formData.story}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          story: e.target.value,
                        })
                      }
                      className="mt-1 w-full rounded-md border border-slate/20 px-3.5 py-2 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  {/* Error */}
                  {submitError && (
                    <p className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-600">
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full justify-center !py-2.5 text-xs font-bold cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Testimony
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}