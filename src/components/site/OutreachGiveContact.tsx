import { ArrowRight, BookOpenCheck, Droplet, Globe, Heart, HeartHandshake, Home, Mail, Phone } from "lucide-react";

const outreach = [
  { icon: Droplet, label: "Blood Donation" },
  { icon: HeartHandshake, label: "Elderly Support" },
  { icon: Home, label: "Children's Home Outreach" },
  { icon: BookOpenCheck, label: "Educational Support" },
];

export function CommunityOutreach() {
  return (
    <div id="outreach">
      <p className="eyebrow">Community Outreach</p>
      <h2 className="mt-2 text-3xl text-navy">Serving Beyond the Prayer Meeting</h2>
      <p className="mt-2 text-sm text-slate">Through Kanmalai Charitable Trust, the ministry reaches people through practical acts of service.</p>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {outreach.map((o) => (
          <li key={o.label} className="rounded-md border bg-card p-4 shadow-card">
            <o.icon className="h-6 w-6 text-gold" />
            <p className="mt-3 text-xs font-semibold leading-snug text-navy">{o.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Give() {
  return (
    <div id="give" className="rounded-lg bg-navy-gradient p-7 text-ivory shadow-card ring-1 ring-gold/40">
      <p className="eyebrow text-gold">Support the Ministry</p>
      <h2 className="mt-2 text-3xl">Help Us Continue the Work</h2>
      <p className="mt-3 text-sm text-ivory/85">Your support helps us continue sharing the Gospel, prayer, teaching, encouragement, and ministry outreach.</p>
      <div className="mt-6 flex items-center gap-6">
        <Heart className="h-8 w-8 text-gold" />
        {/* Razorpay checkout will be connected to this button later */}
        <button type="button" className="btn-gold">Give Now <ArrowRight className="h-4 w-4" /></button>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div id="contact">
      <p className="eyebrow">Contact Us</p>
      <h2 className="mt-2 text-3xl text-navy">We'd Love to Hear From You</h2>
      <ul className="mt-5 space-y-3 text-sm text-navy">
        <li><a href="tel:9585191911" className="flex items-center gap-3 hover:text-gold"><Phone className="h-5 w-5" />9585191911</a></li>
        <li><a href="mailto:stanleysureshministries@gmail.com" className="flex items-center gap-3 break-all hover:text-gold"><Mail className="h-5 w-5 shrink-0" />stanleysureshministries@gmail.com</a></li>
        <li><a href="https://stanleysureshministries.in" className="flex items-center gap-3 hover:text-gold"><Globe className="h-5 w-5" />stanleysureshministries.in</a></li>
      </ul>
      <a href="mailto:stanleysureshministries@gmail.com" className="btn-outline-navy mt-6 w-full justify-center">Contact Us</a>
    </div>
  );
}

export function OutreachGiveContactRow() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.35fr_1fr_0.9fr] lg:px-8">
        <CommunityOutreach />
        <Give />
        <Contact />
      </div>
    </section>
  );
}
