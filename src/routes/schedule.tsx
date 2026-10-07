import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Globe,
  MapPin,
  Phone,
  Video,
} from "lucide-react";

const events = [
  {
    image: "/schedule/tuesday meeting.png",
    frequency: "Every Tuesday",
    title: "Intercessory Prayer Meeting",
    tamilTitle: "ஒவ்வொரு செவ்வாய்க்கிழமையும் – இடைநிலை ஜெபக் கூட்டம்",
    time: "3:00 PM – 5:00 PM",
    location: "Conference Call",
    description:
      "Join us every Tuesday for a dedicated time of intercessory prayer, fellowship and seeking God's presence.",
    tamilDescription:
      "ஒவ்வொரு செவ்வாய்க்கிழமையும் இடைநிலை ஜெபம், ஐக்கியம் மற்றும் தேவனுடைய பிரசன்னத்தை நாடும் நேரத்தில் எங்களுடன் இணைந்துகொள்ளுங்கள்.",
    icon: Phone,
    actionLabel: "Join / Call",
    actionHref: "tel:9585191911",
  },
  {
    image: "/schedule/thursday meeting.png",
    frequency: "Every Thursday",
    title: "Prayer Meeting",
    tamilTitle: "ஒவ்வொரு வியாழக்கிழமையும் – ஜெபக் கூட்டம்",
    time: "3:00 PM – 5:00 PM",
    location: "Zoom",
    description:
      "Join our weekly prayer meeting online through Zoom and take part in a time of prayer and fellowship.",
    tamilDescription:
      "ஒவ்வொரு வியாழக்கிழமையும் Zoom வழியாக நடைபெறும் எங்கள் ஜெபக் கூட்டத்தில் இணைந்து ஜெபத்திலும் ஐக்கியத்திலும் பங்கேற்கலாம்.",
    meetingId: "7090305000",
    password: "2020",
    icon: Video,
    actionLabel: "Join Zoom",
    actionHref: "https://zoom.us/j/7090305000",
    
  },
  {
    image: "/schedule/1st sat meeting.png",
    frequency: "Every First Saturday",
    title: "First Saturday Deliverance Prayer Meeting",
    tamilTitle: "ஒவ்வொரு முதல் சனிக்கிழமையும் – விடுதலை ஜெபக் கூட்டம்",
    time: "10:30 AM – 1:00 PM",
    location: "House of Vision No: 12/41, Jeevan Nagar, 5th Street, Adambakkam, Chennai: 600088.",
    description:
      "A special prayer gathering focused on deliverance, spiritual renewal and God's intervention.",
    tamilDescription:
      "விடுதலை, ஆவிக்குரிய புதுப்பித்தல் மற்றும் தேவனுடைய தலையீட்டை நாடும் சிறப்பு ஜெபக் கூட்டம்.",
    icon: MapPin,
    actionLabel: "Get Directions",
    actionHref: "https://maps.app.goo.gl/i7zwDTkeXvMQiVWW9",
  },
  {
    image: "/schedule/2nd sat meet.png",
    frequency: "Every Second Saturday",
    title: "Second Saturday Deliverance Prayer Meeting",
    tamilTitle: "ஒவ்வொரு இரண்டாவது சனிக்கிழமையும் – விடுதலை ஜெபக் கூட்டம்",
    time: "10:30 AM – 1:00 PM",
    location: "Arputharaj Matriculation School, No 9, Nelson Manickam Road, Choolaimedu, Chennai - 600094.",
    description:
      "Come together for a special time of prayer, deliverance and spiritual encouragement.",
    tamilDescription:
      "ஜெபம், விடுதலை மற்றும் ஆவிக்குரிய ஊக்கத்தைப் பெறும் சிறப்பு நேரத்தில் எங்களுடன் இணைந்துகொள்ளுங்கள்.",
    icon: MapPin,
    actionLabel: "Get Directions",
    actionHref: "https://maps.app.goo.gl/8xnabvJsyfwr7wzv9",
  },
  {
    image: "/schedule/anna nagar meeting.png",
    frequency: "Every Second Tuesday",
    title: "Anna Nagar Prayer Meeting",
    tamilTitle: "ஒவ்வொரு இரண்டாவது செவ்வாய்க்கிழமையும் – அண்ணா நகர் ஜெபக் கூட்டம்",
    time: "11:00 AM – 1:00 PM",
    location: "No: 338, Annai Sathya Nagar, 12th Street, AnnaNagar East Chennai - 600102.",
    description:
      "Join us in Anna Nagar for a time of prayer, fellowship and seeking God's guidance and blessing.",
    tamilDescription:
      "அண்ணா நகரில் நடைபெறும் ஜெபம், ஐக்கியம் மற்றும் தேவனுடைய வழிநடத்துதலையும் ஆசீர்வாதத்தையும் நாடும் நேரத்தில் இணைந்துகொள்ளுங்கள்.",
    icon: MapPin,
    actionLabel: "Get Directions",
    actionHref: "https://maps.app.goo.gl/BooRDGiqVC4pQRNS6",
  },
  {
    image: "/schedule/cottage prayer meeting.png",
    frequency: "Every Third Wednesday",
    title: "Family Blessing Cottage Prayer Meeting",
    tamilTitle:
      "ஒவ்வொரு மூன்றாவது புதன்கிழமையும் – குடும்ப ஆசீர்வாத குடில் ஜெபக் கூட்டம்",
    time: "11:00 AM – 12:00 PM",
    location: "Zoom",
    description:
      "A special family prayer meeting focused on blessing, strengthening and encouraging families.",
    tamilDescription:
      "குடும்பங்களின் ஆசீர்வாதம், பலப்படுத்துதல் மற்றும் ஊக்கத்திற்காக நடைபெறும் சிறப்பு ஜெபக் கூட்டம்.",
    meetingId: "7090305000",
    password: "2020",
    icon: Video,
    actionLabel: "Join Zoom",
    actionHref: "https://zoom.us/j/7090305000",
  },
  {
    image: "/schedule/zoom meeting.png",
    frequency: "Every Saturday",
    title: "Online Zoom Prayer Meeting",
    tamilTitle: "ஒவ்வொரு சனிக்கிழமையும் – ஆன்லைன் Zoom ஜெபக் கூட்டம்",
    time: "9:00 PM – 10:00 PM",
    location: "Online via Zoom",
    description:
      "Join us online every Saturday evening for prayer, worship and fellowship from wherever you are.",
    tamilDescription:
      "நீங்கள் இருக்கும் இடத்திலிருந்தே ஒவ்வொரு சனிக்கிழமை இரவும் ஆன்லைன் மூலம் ஜெபம், ஆராதனை மற்றும் ஐக்கியத்தில் இணைந்துகொள்ளுங்கள்.",
    meetingId: "7090305000",
    password: "2020",
    icon: Video,
    actionLabel: "Join Zoom",
    actionHref: "https://zoom.us/j/7090305000",
  },
  {
    image: "/schedule/arranging prayer meeting.png",
    frequency: "Prayer Meetings at Your Place",
    title: "Prayer Meetings at Your Place",
    tamilTitle: "உங்கள் இடத்தில் ஜெபக் கூட்டங்கள்",
    time: "By Arrangement",
    location: "Homes, Churches, Workplaces & Other Locations",
    description:
      "Prayer meetings can be arranged at homes, churches, workplaces, neighbourhoods, other locations and even outside the city.",
    tamilDescription:
      "வீடுகள், தேவாலயங்கள், பணியிடங்கள், குடியிருப்புகள், பிற இடங்கள் மற்றும் நகரத்திற்கு வெளியேயும் ஜெபக் கூட்டங்கள் ஏற்பாடு செய்யலாம்.",
    phone: "9585191911",
    email: "stanleysureshministries@gmail.com",
    icon: Phone,
    actionLabel: "Contact Ministry",
    actionHref: "tel:9585191911",
  },
];

function SchedulePage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Header */}
      <section className="border-b bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
          <p className="eyebrow text-gold">Ministry Schedule</p>

          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Join Us in Prayer
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            Join us in prayer, worship, deliverance and fellowship through our
            regular ministry gatherings and special prayer meetings.
          </p>

          <p className="mt-3 text-sm text-gold">
            ஜெபத்தில் எங்களுடன் இணைந்திருங்கள்
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow">Our Gatherings</p>

          <h2 className="mt-2 text-3xl text-navy md:text-4xl">
            Ministry Events
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate">
            Explore our complete ministry schedule, including regular prayer meetings, online gatherings and special prayer meetings.
          </p>
        </div>

        <div className="space-y-10">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-gold/25 bg-white shadow-card"
              >
                <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                  {/* Poster */}
                  <div className="relative flex items-center justify-center overflow-hidden bg-navy/5 p-4 sm:p-6 lg:p-8">
                    <div className="w-full overflow-hidden rounded-xl border border-gold/20 bg-white shadow-md">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-4">
                        <span className="font-display text-3xl font-semibold leading-none text-gold/70">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                            <CalendarDays className="h-4 w-4" />
                            {event.frequency}
                        </div>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold text-navy md:text-3xl">
                        {event.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-gold">
                      {event.tamilTitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-slate">
                      {event.description}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate">
                      {event.tamilDescription}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="flex items-start gap-3 rounded-lg border bg-ivory p-4">
                        <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate">
                            Time
                          </p>
                          <p className="mt-1 text-sm font-semibold text-navy">
                            {event.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-lg border bg-ivory p-4">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate">
                            Location
                          </p>
                          <p className="mt-1 text-sm font-semibold text-navy">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {(event.meetingId || event.phone || event.email) && (
                      <div className="mt-4 space-y-2 rounded-lg border border-gold/20 bg-gold/5 p-4">
                        {event.meetingId && (
                          <div className="flex items-center gap-3 text-sm">
                            <Globe className="h-4 w-4 text-gold" />
                            <span className="text-slate">
                              Meeting ID:
                            </span>
                            <span className="font-semibold text-navy">
                              {event.meetingId}
                            </span>
                          </div>
                        )}

                        {event.password && (
                          <div className="flex items-center gap-3 text-sm">
                            <span className="ml-7 text-slate">
                              Password:
                            </span>
                            <span className="font-semibold text-navy">
                              {event.password}
                            </span>
                          </div>
                        )}

                        {event.phone && (
                          <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-gold" />
                            <span className="text-slate">Call / WhatsApp:</span>
                            <span className="font-semibold text-navy">
                              {event.phone}
                            </span>
                          </div>
                        )}

                        
                      </div>
                    )}

                    {event.actionLabel && event.actionHref && (
                        <a
                            href={event.actionHref}
                            target={event.actionHref.startsWith("http") ? "_blank" : undefined}
                            rel={event.actionHref.startsWith("http") ? "noreferrer" : undefined}
                            className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
                        >
                            <Icon className="h-4 w-4 text-gold" />
                            {event.actionLabel}
                        </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl border border-gold/30 bg-navy p-8 text-center shadow-card md:p-10">
          <p className="eyebrow text-gold">Need Prayer?</p>

          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            We Would Be Glad to Pray With You
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/75">
            If you would like to arrange a prayer meeting or need more
            information about any gathering, please contact us.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9585191911"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>

            <a
              href="mailto:stanleysureshministries@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/schedule")({
  component: SchedulePage,
});
