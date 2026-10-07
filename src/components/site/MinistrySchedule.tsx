import { ArrowRight, CalendarDays } from "lucide-react";

const items = [
  { when: "Every Tuesday", what: "Prayer / Conference Meeting" },
  { when: "Every Thursday", what: "Prayer Meeting" },
  { when: "Every First Saturday", what: "Deliverance Prayer Meeting" },
  { when: "Every Second Saturday", what: "Deliverance Prayer Meeting" },
  { when: "Every Second Tuesday", what: "Anna Nagar Prayer Meeting" },
  { when: "Every Saturday", what: "Online Prayer" },
];

export function MinistrySchedule() {
  return (
    <section id="schedule" className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.8fr_3fr] lg:px-8">
        <div>
          <p className="eyebrow">Ministry Schedule</p>

          <h2 className="mt-2 text-3xl text-navy">
            Join Us in Prayer
          </h2>

          <p className="mt-2 text-sm text-slate">
            Find a prayer gathering near you or join us online.
          </p>

          <a
            href="/schedule"
            className="btn-outline-gold mt-5 text-navy"
          >
            View Full Schedule
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((i) => (
            <li
              key={i.when}
              className="rounded-md border bg-ivory p-4 shadow-card"
            >
              <CalendarDays className="h-6 w-6 text-gold" />

              <p className="mt-3 text-sm font-semibold text-navy">
                {i.when}
              </p>

              <p className="mt-1 text-xs text-slate">
                {i.what}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
