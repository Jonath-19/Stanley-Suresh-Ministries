import { ArrowRight, CalendarDays, Play, Youtube } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  YOUTUBE_CHANNEL_URL,
  fetchLatestLiveVideo,
  fetchLatestVideos,
} from "@/lib/youtube";

const sessions = [
  {
    day: "Every Saturday",
    name: "Saturday Night Prayer",
    time: "9:00 PM – 12:00 AM",
  },
];

export function Sermons() {
  const {
    data: videos = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["yt-videos"],
    queryFn: () => fetchLatestVideos(4),
    staleTime: 1000 * 60 * 30,
    retry: false,
  });

  return (
    <div
      id="sermons"
      className="grid items-center gap-6 md:grid-cols-[0.85fr_1.5fr]"
    >
      {/* Left Content */}
      <div>
        <p className="eyebrow">Sermons</p>

        <h2 className="mt-2 text-3xl text-navy">
          Watch.
          <br />
          Listen.
          <br />
          Grow in Faith.
        </h2>

        <p className="mt-3 text-sm text-slate">
          Explore messages and teachings from Stanley Suresh Ministries through
          the ministry's YouTube channel.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-youtube px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory"
          >
            <Youtube className="h-4 w-4" />
            Watch Sermons
          </a>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory"
          >
            Visit YouTube
          </a>
        </div>
      </div>

      {/* Latest YouTube Videos - 2 x 2 */}
      <div className="grid grid-cols-2 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video animate-pulse rounded-md bg-navy/10"
            />
          ))
          : videos.slice(0, 4).map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              title={video.title}
              className="group relative aspect-video overflow-hidden rounded-md bg-navy shadow-sm"
            >
              <img
                src={video.thumbnail}
                alt={video.title || "Sermon video"}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient */}
              <span className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/10 to-transparent" />

              {/* Play Button */}
              <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-ivory/80 bg-navy/70 text-ivory backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Play className="h-4 w-4 fill-current" />
              </span>

              {/* Video Title */}
              <span className="absolute inset-x-3 bottom-3 line-clamp-2 text-xs font-semibold leading-snug text-ivory">
                {video.title}
              </span>
            </a>
          ))}

        {/* YouTube Error */}
        {isError && (
          <div className="col-span-2 flex aspect-video items-center justify-center rounded-md bg-navy p-6 text-center text-sm text-ivory">
            <div>
              <p className="font-semibold">
                Unable to load YouTube videos.
              </p>

              <p className="mt-2 text-xs text-ivory/70">
                {error instanceof Error
                  ? error.message
                  : "YouTube request failed."}
              </p>
            </div>
          </div>
        )}

        {/* No Videos */}
        {!isLoading && !isError && videos.length === 0 && (
          <div className="col-span-2 flex aspect-video items-center justify-center rounded-md bg-navy p-6 text-center text-sm text-ivory/80">
            Latest videos will appear here from the ministry's YouTube channel.
          </div>
        )}
      </div>
    </div>
  );
}

export function LivePrayer() {
  const { data: latestLiveVideo, isLoading } = useQuery({
    queryKey: ["yt-latest-live"],
    queryFn: fetchLatestLiveVideo,
    staleTime: 1000 * 60 * 5,
  });

  const liveUrl = latestLiveVideo?.url ?? YOUTUBE_CHANNEL_URL;

  return (
    <div
      id="live-prayer"
      className="md:border-l md:border-border md:pl-8"
    >
      <p className="eyebrow">Live Prayer</p>

      <h2 className="mt-2 text-3xl text-navy">
        Join Us in Prayer
      </h2>

      <p className="mt-2 text-sm text-slate">
        Prayer continues beyond physical gatherings through online meetings.
      </p>

      {/* Prayer Schedule */}
      <div className="mt-4 grid gap-3">
        {sessions.map((session) => (
          <div
            key={session.day}
            className="flex gap-3 rounded-md bg-navy p-4 text-ivory shadow-card"
          >
            <CalendarDays className="h-6 w-6 shrink-0 text-gold" />

            <div className="text-xs">
              <p className="text-sm font-semibold">
                {session.day}
              </p>

              <p className="text-ivory/80">
                {session.name}
              </p>

              <p>{session.time}</p>

              <p className="text-ivory/80">
                Online / Zoom
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Join Live Prayer */}
      <div className="mt-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-gold w-full justify-center !py-2.5"
        >
          {isLoading ? "Loading..." : "Join Live Prayer"}

          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export function SermonsLiveRow() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:lg:grid-cols-[2fr_0.85fr] lg:px-8">
        <Sermons />
        <LivePrayer />
      </div>
    </section>
  );
}
