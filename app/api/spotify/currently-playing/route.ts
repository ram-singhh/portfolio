import { NextResponse } from "next/server";
import { getCurrentlyPlaying } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getCurrentlyPlaying();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=15",
      },
    });
  } catch (error) {
    console.error("Error in currently-playing route handler:", error);
    return NextResponse.json(
      {
        isPlaying: false,
        isConfigured: true,
        track: null,
        progressMs: null,
        durationMs: null,
        timestamp: Date.now(),
        error: "internal-server-error",
      },
      { status: 500 }
    );
  }
}
