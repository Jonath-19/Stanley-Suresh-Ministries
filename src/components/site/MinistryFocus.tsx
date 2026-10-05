import { useState } from "react";
import { ArrowRight, BookOpen, HandHeart, Link2Off, Sunrise, X } from "lucide-react";
import prayer from "@/assets/focus-prayer.jpg";
import deliverance from "@/assets/focus-deliverance.jpg";
import healing from "@/assets/focus-healing.jpg";
import restoration from "@/assets/focus-restoration.jpg";

const cards = [
  {
    title: "Prayer",
    img: prayer,
    icon: HandHeart,
    text: "A place to bring your needs, burdens, and concerns before God.",
    cta: "Learn More",
    solid: true,
    english:
      "Prayer is at the heart of Stanley Suresh Ministries. We believe prayer brings people closer to God, strengthens faith, and gives hope in every season. We pray for individuals and families seeking God's guidance, comfort, breakthrough, and blessing.",
    tamil:
      "ஜெபம் என்பது ஸ்டான்லி சுரேஷ் ஊழியத்தின் மையமாகும். ஜெபத்தின் மூலம் மக்கள் தேவனிடம் நெருங்கி வரவும், விசுவாசத்தில் பலப்படவும், ஒவ்வொரு சூழ்நிலையிலும் நம்பிக்கையைப் பெறவும் உதவுகிறோம். தேவனுடைய வழிநடத்துதல், ஆறுதல், விடுதலை மற்றும் ஆசீர்வாதத்தை நாடுகிற தனிநபர்கள் மற்றும் குடும்பங்களுக்காக நாங்கள் ஜெபிக்கிறோம்.",
  },
  {
    title: "Deliverance",
    img: deliverance,
    icon: Link2Off,
    text: "Prayer and spiritual support centered on freedom and a deeper walk with Christ.",
    cta: "Learn More",
    solid: false,
    english:
      "The ministry focuses on helping people experience freedom through prayer and faith in Jesus Christ. Through spiritual encouragement and prayer, we stand with those facing fear, burdens, struggles, and spiritual challenges, pointing them toward the freedom and hope found in Christ.",
    tamil:
      "இயேசு கிறிஸ்துவின் மேல் உள்ள விசுவாசம் மற்றும் ஜெபத்தின் மூலம் மக்கள் விடுதலையை அனுபவிக்க உதவுவதே இந்த ஊழியத்தின் நோக்கமாகும். பயம், பாரம், போராட்டங்கள் மற்றும் ஆவிக்குரிய சவால்களை எதிர்கொள்பவர்களுடன் நாங்கள் ஜெபத்தில் நிற்கிறோம். கிறிஸ்துவில் காணப்படும் விடுதலை மற்றும் நம்பிக்கையை நோக்கி அவர்களை வழிநடத்துகிறோம்.",
  },
  {
    title: "Healing",
    img: healing,
    icon: BookOpen,
    text: "Encouragement to seek God through faith and prayer during difficult seasons.",
    cta: "Learn More",
    solid: true,
    english:
      "We encourage people to seek God through prayer and faith during times of physical, emotional, and spiritual difficulty. The ministry stands with individuals and families in prayer, trusting God for healing, strength, peace, and renewed hope.",
    tamil:
      "உடல், மனம் மற்றும் ஆவிக்குரிய சிரமங்களின் காலங்களில் ஜெபத்திலும் விசுவாசத்திலும் தேவனைத் தேட மக்களை ஊக்குவிக்கிறோம். தனிநபர்கள் மற்றும் குடும்பங்களுக்காக ஜெபத்தில் இணைந்து, சுகம், பெலன், சமாதானம் மற்றும் புதிய நம்பிக்கைக்காக தேவனை நம்புகிறோம்.",
  },
  {
    title: "Restoration",
    img: restoration,
    icon: Sunrise,
    text: "Supporting individuals and families as they seek hope, renewal, and a closer relationship with God.",
    cta: "Learn More",
    solid: false,
    english:
      "Restoration is about finding hope and renewal in God's presence. We encourage individuals and families to rebuild their faith, relationships, and spiritual lives through prayer, Scripture, and the love of Christ.",
    tamil:
      "தேவனுடைய சந்நிதியில் நம்பிக்கையையும் புதுப்பித்தலையும் கண்டடைவதே மறுசீரமைப்பாகும். ஜெபம், வேதவசனம் மற்றும் கிறிஸ்துவின் அன்பின் மூலம் தனிநபர்களும் குடும்பங்களும் தங்கள் விசுவாசம், உறவுகள் மற்றும் ஆவிக்குரிய வாழ்க்கையை மீண்டும் கட்டியெழுப்ப ஊக்குவிக்கிறோம்.",
  },
];

export function MinistryFocus() {
  const [selectedCard, setSelectedCard] = useState<(typeof cards)[number] | null>(null);

  return (
    <section id="focus" className="bg-navy-gradient text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold">Our Focus</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Prayer. Deliverance. <span className="text-gold">Healing.</span> Restoration.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory/80 md:text-right">
            A ministry centered on helping people seek God through prayer, faith, Scripture, and spiritual encouragement.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
  <article
    key={c.title}
    className="group overflow-hidden rounded-lg border border-ivory/15 bg-deep/60 shadow-card"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={c.img}
        alt={c.title}
        loading="lazy"
        width={992}
        height={672}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="flex gap-3 p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/70 text-gold">
        <c.icon className="h-5 w-5" />
      </span>

      <div>
        <h3 className="text-xl">{c.title}</h3>

        <p className="mt-1 text-sm leading-relaxed text-ivory/80">
          {c.text}
        </p>

        <button
          type="button"
          onClick={() => setSelectedCard(c)}
          className={`mt-4 cursor-pointer ${
            c.solid
              ? "btn-gold !px-5 !py-2"
              : "btn-outline-gold !py-2"
          }`}
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  </article>
          ))}
        </div>

        {/* Ministry Popup */}
        {selectedCard && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-gold/30 bg-deep shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 overflow-hidden sm:h-64">
                <img
                  src={selectedCard.img}
                  alt={selectedCard.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-4 top-4 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-black/60 text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-semibold text-white drop-shadow-lg">
                    {selectedCard.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  English
                </p>

                <p className="text-base leading-7 text-ivory/85">
                  {selectedCard.english}
                </p>

                <div className="my-6 h-px bg-ivory/10" />

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  தமிழ்
                </p>

                <p className="text-base leading-8 text-ivory/85">
                  {selectedCard.tamil}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}