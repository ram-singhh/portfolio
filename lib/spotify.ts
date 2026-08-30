export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  image: string | null;
  spotifyUrl: string | null;
}

export interface SpotifyResponse {
  isPlaying: boolean;
  isConfigured: boolean;
  track: SpotifyTrack | null;
  progressMs: number | null;
  durationMs: number | null;
  timestamp: number;
  error?: string;
}

// In-memory cache for the access token (server-side only)
let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

// In-memory cache for currently playing track to avoid hammering Spotify's API
let cachedPlayingData: SpotifyResponse | null = null;
let playingDataExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify credentials");
  }

  // If token is still valid (with a 60-second buffer), reuse it
  if (cachedAccessToken && Date.now() < tokenExpiresAt - 60000) {
    return cachedAccessToken;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to refresh Spotify token: ${response.status} ${errorBody}`);
  }

  const data = await response.json();
  cachedAccessToken = data.access_token;
  // expires_in is in seconds
  tokenExpiresAt = Date.now() + data.expires_in * 1000;

  return data.access_token;
}

function parseCurrentlyPlaying(data: any): SpotifyResponse {
  if (!data || !data.item) {
    return {
      isConfigured: true,
      isPlaying: false,
      track: null,
      progressMs: null,
      durationMs: null,
      timestamp: Date.now(),
    };
  }

  const { item, is_playing, progress_ms } = data;
  
  const isTrack = item.type === "track";
  
  const track: SpotifyTrack = {
    name: item.name || "Unknown Track",
    artist: isTrack 
      ? (item.artists || []).map((a: any) => a.name).join(", ") 
      : (item.show?.name || "Unknown Podcast"),
    album: isTrack 
      ? (item.album?.name || "") 
      : "",
    image: isTrack 
      ? (item.album?.images?.[0]?.url || null) 
      : (item.images?.[0]?.url || null),
    spotifyUrl: item.external_urls?.spotify || null,
  };

  return {
    isConfigured: true,
    isPlaying: is_playing,
    track,
    progressMs: progress_ms || null,
    durationMs: item.duration_ms || null,
    timestamp: Date.now(),
  };
}

export async function getCurrentlyPlaying(): Promise<SpotifyResponse> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return {
      isConfigured: false,
      isPlaying: false,
      track: null,
      progressMs: null,
      durationMs: null,
      timestamp: Date.now(),
    };
  }

  // Return cached playing data if it is fresh (15 seconds)
  if (cachedPlayingData && Date.now() < playingDataExpiresAt) {
    return cachedPlayingData;
  }

  try {
    const accessToken = await getAccessToken();

    const response = await fetch("https://api.spotify.com/v1/me/player", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (response.status === 204 || response.status === 404) {
      const result: SpotifyResponse = {
        isConfigured: true,
        isPlaying: false,
        track: null,
        progressMs: null,
        durationMs: null,
        timestamp: Date.now(),
      };
      
      // Cache the "not playing" state for 15s to avoid hammering
      cachedPlayingData = result;
      playingDataExpiresAt = Date.now() + 15000;
      return result;
    }

    if (response.status === 401) {
      // Invalidate token cache and retry once
      tokenExpiresAt = 0;
      cachedAccessToken = null;
      
      const retryAccessToken = await getAccessToken();
      const retryResponse = await fetch("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: `Bearer ${retryAccessToken}`,
        },
        cache: "no-store",
      });

      if (retryResponse.status === 204 || retryResponse.status === 404) {
        const result: SpotifyResponse = {
          isConfigured: true,
          isPlaying: false,
          track: null,
          progressMs: null,
          durationMs: null,
          timestamp: Date.now(),
        };
        cachedPlayingData = result;
        playingDataExpiresAt = Date.now() + 15000;
        return result;
      }

      if (!retryResponse.ok) {
        throw new Error(`Spotify currently playing API error after retry: ${retryResponse.status}`);
      }

      const retryData = await retryResponse.json();
      const result = parseCurrentlyPlaying(retryData);
      cachedPlayingData = result;
      playingDataExpiresAt = Date.now() + 15000;
      return result;
    }

    if (response.status === 429) {
      // Respect Spotify rate limiting (cache slightly longer, 30s, to let it back off)
      const result: SpotifyResponse = {
        isConfigured: true,
        isPlaying: false,
        track: null,
        progressMs: null,
        durationMs: null,
        timestamp: Date.now(),
        error: "rate-limited",
      };
      cachedPlayingData = result;
      playingDataExpiresAt = Date.now() + 30000;
      return result;
    }

    if (response.status >= 500) {
      // Handle server error gracefully (short cache 10s so we can retry soon)
      const result: SpotifyResponse = {
        isConfigured: true,
        isPlaying: false,
        track: null,
        progressMs: null,
        durationMs: null,
        timestamp: Date.now(),
        error: "spotify-server-error",
      };
      cachedPlayingData = result;
      playingDataExpiresAt = Date.now() + 10000;
      return result;
    }

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    const result = parseCurrentlyPlaying(data);
    
    cachedPlayingData = result;
    playingDataExpiresAt = Date.now() + 15000;
    
    return result;
  } catch (error: any) {
    console.error("Error in getCurrentlyPlaying:", error.message || error);
    // Don't leak credentials or sensitive details in UI error
    return {
      isConfigured: true,
      isPlaying: false,
      track: null,
      progressMs: null,
      durationMs: null,
      timestamp: Date.now(),
      error: "connection-error",
    };
  }
}
