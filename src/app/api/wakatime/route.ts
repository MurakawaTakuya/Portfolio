import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://wakatime.com/api/v1/users/4fc8088f-5a18-4f4b-99be-28a739b8cc1c/stats/all_time?timeout=15",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`WakaTime API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch WakaTime stats" },
      { status: 500 }
    );
  }
}
