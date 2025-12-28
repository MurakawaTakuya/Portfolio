import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://atcoder.jp/users/RarabyBye/history/json?contestType=algo",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`AtCoder API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch AtCoder data:", error);
    return NextResponse.json(
      { error: "Failed to fetch AtCoder data" },
      { status: 500 }
    );
  }
}
