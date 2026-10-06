import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import prayer from "@/assets/focus-prayer.jpg";
import { supabase } from "@/lib/supabase";

export function PrayerRequest() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    prayerRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSubmitted(false);

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.location.trim() ||
      !form.prayerRequest.trim()
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: supabaseError } = await supabase
        .from("prayer_requests")
        .insert({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          location: form.location.trim(),
          prayer_request: form.prayerRequest.trim(),
        });

      if (supabaseError) {
        throw supabaseError;
      }

      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
        prayerRequest: "",
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Prayer request submission error:", err);

      setError(
        "We couldn't submit your prayer request right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="prayer-request"
      className="relative isolate overflow-hidden bg-navy py-16 text-ivory"
    >
      {/* Background */}
      <img
        src={prayer}
        alt=""
        loading="lazy"
        width={992}
        height={672}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-navy/90 to-deep" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Prayer Request</p>

          <h2 className="mt-3 text-4xl md:text-5xl">
            Need Prayer?
          </h2>

          <p className="mt-3 font-display text-xl italic text-gold-hi">
            You don't have to walk alone.
          </p>

          <p className="mt-4 text-sm leading-6 text-ivory/75">
            Share your prayer request with Stanley Suresh Ministries.
            We are here to stand with you in prayer.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-4xl rounded-xl border border-ivory/10 bg-deep/50 p-6 shadow-card backdrop-blur-sm md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-ivory"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-ivory/20 bg-ivory/10 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/45 focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-ivory"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full rounded-md border border-ivory/20 bg-ivory/10 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/45 focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-ivory"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-ivory/20 bg-ivory/10 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/45 focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-ivory"
              >
                Location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter your city / location"
                required
                className="w-full rounded-md border border-ivory/20 bg-ivory/10 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/45 focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {/* Prayer Request */}
          <div className="mt-5">
            <label
              htmlFor="prayerRequest"
              className="mb-2 block text-sm font-medium text-ivory"
            >
              Prayer Request
            </label>

            <textarea
              id="prayerRequest"
              name="prayerRequest"
              value={form.prayerRequest}
              onChange={handleChange}
              placeholder="Share your prayer request..."
              required
              rows={6}
              className="w-full resize-none rounded-md border border-ivory/20 bg-ivory/10 px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/45 focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mt-5 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}

          {/* Success */}
          {submitted && (
            <div className="mt-5 flex items-center gap-3 rounded-md border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold-hi">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <p>
                Your prayer request has been submitted. We will stand with you
                in prayer.
              </p>
            </div>
          )}

          {/* Submit */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold min-w-[220px] justify-center disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Prayer Request"}

              {!isSubmitting && (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

