import { useRef } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Play, Youtube } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { YOUTUBE_CHANNEL_URL, fetchLatestVideos } from "@/lib/youtube";
import pastor from "@/assets/pastor_photo.jpeg";
import healing from "@/assets/focus-healing.jpg";
import prayer from "@/assets/focus-prayer.jpg";
import sky from "@/assets/hero-sky.jpg";

const fallbackThumbs = [pastor, prayer, sky, healing];

export function Sermons() {
  const track = useRef<HTMLDivElement>(null);
  const { data: videos } = useQuery({ queryKey: ["yt-videos"], queryFn: fetchLatestVideos, staleTime: 1000 * 60 * 30 });
  const scroll = (d: number) => track.current?.scrollBy({ left: d * 240, behavior: "smooth" });
  const items = videos && videos.length
    ? videos.map((v) => ({ key: v.id, thumb: v.thumbnail, title: v.title, href: `https://www.youtube.com/watch?v=${v.id}` }))
    : fallbackThumbs.map((t, i) => ({ key: String(i), thumb: t, title: "", href: YOUTUBE_CHANNEL_URL }));

  return (
    <div id="sermons" className="grid items-center gap-6 md:grid-cols-[0.9fr_1.4fr]">
      <div>
        <p className="eyebrow">Sermons</p>
        <h2 className="mt-2 text-3xl text-navy">Watch. Listen. Grow in Faith.</h2>
        <p className="mt-3 text-sm text-slate">Explore messages and teachings from Stanley Suresh Ministries through the ministry's YouTube channel.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-youtube px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory">
            <Youtube className="h-4 w-4" /> Watch Sermons
          </a>
          <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory">
            Visit YouTube
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => scroll(-1)} aria-label="Previous" className="text-navy"><ChevronLeft /></button>
        <div ref={track} className="flex snap-x gap-2 overflow-x-auto [scrollbar-width:none]">
          {items.map((v) => (
            <a key={v.key} href={v.href} target="_blank" rel="noreferrer" title={v.title} className="relative aspect-[3/4] w-32 shrink-0 snap-start overflow-hidden rounded-md bg-navy md:w-36">
              <img src={v.thumb} alt={v.title || "Sermon video"} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
              <span className="absolute bottom-2 left-2 grid h-7 w-7 place-items-center rounded-full border border-ivory text-ivory"><Play className="h-3 w-3 fill-current" /></span>
              {v.title && <span className="absolute inset-x-2 bottom-11 line-clamp-2 text-[11px] font-medium text-ivory">{v.title}</span>}
            </a>
          ))}
        </div>
        <button onClick={() => scroll(1)} aria-label="Next" className="text-navy"><ChevronRight /></button>
      </div>
    </div>
  );
}

const sessions = [
  { day: "Every Thursday", name: "Thursday Prayer Meeting", time: "3:00 PM – 5:00 PM" },
  { day: "Every Saturday", name: "Saturday Night Prayer", time: "9:00 PM – 10:00 PM" },
];

export function LivePrayer() {
  return (
    <div id="live-prayer" className="md:border-l md:border-border md:pl-8">
      <p className="eyebrow">Live Prayer</p>
      <h2 className="mt-2 text-3xl text-navy">Join Us in Prayer</h2>
      <p className="mt-2 text-sm text-slate">Prayer continues beyond physical gatherings through online meetings.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {sessions.map((s) => (
          <div key={s.day} className="flex gap-3 rounded-md bg-navy p-4 text-ivory shadow-card">
            <CalendarDays className="h-6 w-6 shrink-0 text-gold" />
            <div className="text-xs">
              <p className="text-sm font-semibold">{s.day}</p>
              <p className="text-ivory/80">{s.name}</p>
              <p>{s.time}</p>
              <p className="text-ivory/80">Online / Zoom</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a href="#contact" className="btn-gold justify-center !py-2.5">Join Live Prayer <ArrowRight className="h-3.5 w-3.5" /></a>
        <a href="#prayer-request" className="btn-outline-navy justify-center">Request Prayer</a>
      </div>
    </div>
  );
}

export function SermonsLiveRow() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.7fr_1fr] lg:px-8">
        <Sermons />
        <LivePrayer />
      </div>
    </section>
  );
}
