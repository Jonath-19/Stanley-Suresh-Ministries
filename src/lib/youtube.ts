const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export type YtVideo = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
};

export async function fetchLatestVideos(): Promise<YtVideo[]> {
  if (!API_KEY || !CHANNEL_ID) {
    console.error("YouTube API configuration is missing.");
    return [];
  }

  try {
    // 1. Get the channel's uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );

    if (!channelResponse.ok) {
      throw new Error("Failed to fetch YouTube channel.");
    }

    const channelData = await channelResponse.json();

    const uploadsPlaylistId =
      channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      throw new Error("Uploads playlist not found.");
    }

    // 2. Get latest uploaded videos
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=10&key=${API_KEY}`
    );

    if (!videosResponse.ok) {
      throw new Error("Failed to fetch YouTube videos.");
    }

    const videosData = await videosResponse.json();

    return (videosData.items ?? []).map((item: any) => ({
      id: item.contentDetails.videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
    }));
  } catch (error) {
    console.error("YouTube API error:", error);
    return [];
  }
}
