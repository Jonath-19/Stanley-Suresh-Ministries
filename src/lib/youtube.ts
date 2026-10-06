const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UC98BVKup2UmBWdNktNaOQsA";

export type YtVideo = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
};

export async function fetchLatestVideos(
  maxResults = 10
): Promise<YtVideo[]> {
  if (!API_KEY) {
    throw new Error("YouTube API key is missing.");
  }

  if (!CHANNEL_ID) {
    throw new Error("YouTube channel ID is missing.");
  }

  // Step 1: Get the channel's uploads playlist ID
  const channelUrl = new URL(
    "https://www.googleapis.com/youtube/v3/channels"
  );

  channelUrl.searchParams.set("part", "contentDetails");
  channelUrl.searchParams.set("id", CHANNEL_ID);
  channelUrl.searchParams.set("key", API_KEY);

  const channelResponse = await fetch(channelUrl.toString());

  if (!channelResponse.ok) {
    const errorData = await channelResponse.json().catch(() => null);

    console.error("YouTube channel API error:", errorData);

    throw new Error(
      errorData?.error?.message ||
      "Failed to fetch YouTube channel information."
    );
  }

  const channelData = await channelResponse.json();

  const uploadsPlaylistId =
    channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    throw new Error("Could not find the channel uploads playlist.");
  }

  // Step 2: Get videos from the uploads playlist
  const playlistUrl = new URL(
    "https://www.googleapis.com/youtube/v3/playlistItems"
  );

  playlistUrl.searchParams.set("part", "snippet,contentDetails");
  playlistUrl.searchParams.set("playlistId", uploadsPlaylistId);
  playlistUrl.searchParams.set(
    "maxResults",
    String(Math.min(maxResults, 50))
  );
  playlistUrl.searchParams.set("key", API_KEY);

  const playlistResponse = await fetch(playlistUrl.toString());

  if (!playlistResponse.ok) {
    const errorData = await playlistResponse.json().catch(() => null);

    console.error("YouTube playlist API error:", errorData);

    throw new Error(
      errorData?.error?.message ||
      "Failed to fetch YouTube videos."
    );
  }

  const playlistData = await playlistResponse.json();

  return (playlistData.items ?? [])
    .map((item: any) => {
      const videoId = item.contentDetails?.videoId;

      if (!videoId) {
        return null;
      }

      return {
        id: videoId,
        title: item.snippet?.title ?? "",
        thumbnail:
          item.snippet?.thumbnails?.high?.url ??
          item.snippet?.thumbnails?.medium?.url ??
          item.snippet?.thumbnails?.default?.url ??
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt:
          item.snippet?.publishedAt ??
          item.contentDetails?.videoPublishedAt ??
          "",
        description: item.snippet?.description ?? "",
      };
    })
    .filter(Boolean) as YtVideo[];
}
export type YtLiveVideo = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  publishedAt: string;
};

export async function fetchLatestLiveVideo(): Promise<YtLiveVideo | null> {
  if (!API_KEY) {
    throw new Error("YouTube API key is missing.");
  }

  if (!CHANNEL_ID) {
    throw new Error("YouTube channel ID is missing.");
  }

  /*
   * First check whether the ministry is LIVE right now.
   */
  const liveSearchUrl = new URL(
    "https://www.googleapis.com/youtube/v3/search"
  );

  liveSearchUrl.searchParams.set("part", "snippet");
  liveSearchUrl.searchParams.set("channelId", CHANNEL_ID);
  liveSearchUrl.searchParams.set("eventType", "live");
  liveSearchUrl.searchParams.set("type", "video");
  liveSearchUrl.searchParams.set("maxResults", "1");
  liveSearchUrl.searchParams.set("order", "date");
  liveSearchUrl.searchParams.set("key", API_KEY);

  const liveResponse = await fetch(liveSearchUrl.toString());

  if (liveResponse.ok) {
    const liveData = await liveResponse.json();
    const liveItem = liveData.items?.[0];

    if (liveItem?.id?.videoId) {
      const videoId = liveItem.id.videoId;

      return {
        id: videoId,
        title: liveItem.snippet?.title ?? "Live Prayer",
        thumbnail:
          liveItem.snippet?.thumbnails?.high?.url ??
          liveItem.snippet?.thumbnails?.medium?.url ??
          liveItem.snippet?.thumbnails?.default?.url ??
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        publishedAt: liveItem.snippet?.publishedAt ?? "",
      };
    }
  }

  /*
   * If nothing is live right now, find recent completed
   * livestreams and return the newest one.
   */
  const completedSearchUrl = new URL(
    "https://www.googleapis.com/youtube/v3/search"
  );

  completedSearchUrl.searchParams.set("part", "snippet");
  completedSearchUrl.searchParams.set("channelId", CHANNEL_ID);
  completedSearchUrl.searchParams.set("eventType", "completed");
  completedSearchUrl.searchParams.set("type", "video");
  completedSearchUrl.searchParams.set("maxResults", "10");
  completedSearchUrl.searchParams.set("order", "date");
  completedSearchUrl.searchParams.set("key", API_KEY);

  const completedResponse = await fetch(completedSearchUrl.toString());

  if (!completedResponse.ok) {
    return null;
  }

  const completedData = await completedResponse.json();

  const candidateIds = (completedData.items ?? [])
    .map((item: any) => item.id?.videoId)
    .filter(Boolean);

  if (!candidateIds.length) {
    return null;
  }

  /*
   * Check which of those videos actually have livestream metadata.
   */
  const detailsUrl = new URL(
    "https://www.googleapis.com/youtube/v3/videos"
  );

  detailsUrl.searchParams.set("part", "snippet,liveStreamingDetails");
  detailsUrl.searchParams.set("id", candidateIds.join(","));
  detailsUrl.searchParams.set("key", API_KEY);

  const detailsResponse = await fetch(detailsUrl.toString());

  if (!detailsResponse.ok) {
    return null;
  }

  const detailsData = await detailsResponse.json();

  const latestStream = (detailsData.items ?? [])
    .filter((item: any) => item.liveStreamingDetails)
    .sort(
      (a: any, b: any) =>
        new Date(b.snippet?.publishedAt ?? 0).getTime() -
        new Date(a.snippet?.publishedAt ?? 0).getTime()
    )[0];

  if (!latestStream) {
    return null;
  }

  const videoId = latestStream.id;

  return {
    id: videoId,
    title: latestStream.snippet?.title ?? "Latest Live Prayer",
    thumbnail:
      latestStream.snippet?.thumbnails?.high?.url ??
      latestStream.snippet?.thumbnails?.medium?.url ??
      latestStream.snippet?.thumbnails?.default?.url ??
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${videoId}`,
    publishedAt: latestStream.snippet?.publishedAt ?? "",
  };
}

