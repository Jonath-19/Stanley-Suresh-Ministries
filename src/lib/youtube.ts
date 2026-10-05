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
