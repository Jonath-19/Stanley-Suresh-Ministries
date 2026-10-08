import { useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Quote,
  Send,
  Sparkles,
  X,
} from "lucide-react";

interface Testimony {
  id: string;
  name: string;
  location: string;
  title: string;
  story: string;
  date: string;
  verified: boolean;
}

const testimonies: Testimony[] = [
  {
    id: "t1",
    name: "Hannah",
    location: "Chengalpattu, Tamil Nadu",
    title: "A College Door Opened at the Right Time",
    story:
      "For a long time, I struggled with the uncertainty of getting a college admission, after a year filled with exams, stress and many challenges. I shared my situation and received prayer from Pastor Stanley Suresh, trusting God even when I could not see a way forward. I never expected things to change so quickly, but God opened the door at exactly the right time, and I was able to secure a seat and join the final batch. Even though the college fees involved a large amount of money and we had no clear source to arrange it, God made a way for us. I thank the Lord for fulfilling His word and opening this door for my future.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "t2",
    name: "Priya & Vinoth",
    location: "Chennai, Tamil Nadu",
    title: "Blessed with the Gift of a Child",
    story:
      "Priya and Vinoth had been waiting for many years for the blessing of a child. They came in person to the prayer meetings and received prayer from Pastor Stanley Suresh, continuing to trust God despite the long wait. Today, they have received the precious gift of a child, and their long-awaited prayer has been answered. We give all glory and thanks to God for His faithfulness and for this wonderful blessing in their family.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "t3",
    name: "Saranya",
    location: "Coimbatore, Tamil Nadu",
    title: "Freedom from Frequent Seizures",
    story:
      "From birth, my child suffered from frequent seizures, sometimes having seizures nearly 10 times a day. I reached out to Pastor Stanley Suresh for prayer, and he prayed for my child and our family. After prayer, the seizures gradually reduced and have now completely stopped. My child has since joined a special school and is slowly learning to walk and speak. I thank God for His grace and for the wonderful changes He has brought into my child's life.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "t4",
    name: "Priya",
    location: "Canada",
    title: "First Selected for an Internship",
    story:
      "I was going through a period of uncertainty regarding my internship and was waiting for confirmation after my training. I received prayer from Pastor Stanley Suresh, and I trusted God for the opportunity. I was later told that only 30 people would be selected, and to my great joy, I was the first person selected. I was filled with happiness and immediately wanted to thank God for answering my prayer. I give all glory to the Lord for opening this opportunity for me.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "t5",
    name: "J. Nesamani Sonja",
    location: "Uttar Pradesh, India",
    title: "Delivered from Severe Stomach Distress",
    story:
      "Last week, I suffered from severe stomach discomfort, excessive gas, bloating and continuous belching for three days, making it difficult for me to eat or even breathe comfortably. I reached out to Pastor Stanley Suresh for prayer, and he prayed for me and instructed me to take oil and pray. During the prayer, I experienced vomiting, followed by a great sense of relief. By the next day, I was completely normal and able to eat regular food again. I give all glory to Jesus for His healing and deliverance.",
    date: "September 2026",
    verified: true,
  },
  {
    id: "t6",
    name: "Valarmathi",
    location: "Manipal",
    title: "Answered Prayer for My Husband's Health",
    story:
      "During my husband's medical check-up, his pulse rate was found to be low at around 52, which caused us great concern. I shared this with Pastor Stanley Suresh, and he prayed for my husband and told me, “Don't worry, sister. You will testify soon.” At the next check-up, his pulse rate had increased to 72, and his echo, ECG and other tests were reported to be normal. The doctor assured us that there was no problem and told us not to be afraid. I thank God for His grace and for answering our prayer.",
    date: "September 2026",
    verified: true,
  },
];

export function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const scrollTestimonials = (direction: "left" | "right") => {
    testimonialsRef.current?.scrollBy({
      left: direction === "right" ? 420 : -420,
      behavior: "smooth",
    });
  };
  
  const [formData, setFormData] = useState({
    full_name: "",
    city: "",
    title: "",
    story: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const { error } = await supabase.from("testimonials").insert([
      {
        full_name: formData.full_name.trim(),
        city: formData.city.trim(),
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

        {/* Action row */}
        <div className="mt-10 flex justify-end border-b border-slate/15 pb-6">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-gold inline-flex cursor-pointer items-center gap-2 !px-4 !py-2 text-xs shadow-sm"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Share Your Testimony
          </button>
        </div>

        {/* Testimonials Carousel */}
<div className="mt-8">
  <div className="mb-5 flex items-center justify-end gap-2">
    <button
      type="button"
      onClick={() => scrollTestimonials("left")}
      className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-white text-navy transition hover:border-gold hover:bg-gold/10"
      aria-label="Previous testimony"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>

    <button
      type="button"
      onClick={() => scrollTestimonials("right")}
      className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-white text-navy transition hover:border-gold hover:bg-gold/10"
      aria-label="Next testimony"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  </div>

  <div
    ref={testimonialsRef}
    className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
  >
    {testimonies.map((item) => (
      <div
        key={item.id}
        className="flex min-h-[430px] flex-none snap-start flex-col justify-between rounded-2xl border border-gold/20 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-gold sm:min-h-[400px] md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
      >
        <div>
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
              <p className="text-xs font-bold text-navy">
                {item.name}
              </p>

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
                    <p className="text-xs font-bold text-navy">
                      {item.name}
                    </p>

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

        {/* Modal */}
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

                  {/* City / Location */}
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
                    className="btn-gold w-full cursor-pointer justify-center !py-2.5 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-60"
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
