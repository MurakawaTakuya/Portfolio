import CountUp from "@/components/CountUp";
import type { StatItem } from "./linkStats";

// AtCoder API response interface
interface AtCoderContest {
  IsRated: boolean;
  Place: number;
  OldRating: number;
  NewRating: number;
  Performance: number;
  InnerPerformance: number;
  ContestScreenName: string;
  ContestName: string;
  ContestNameEn: string;
  EndTime: string;
}

// Cache for AtCoder stats
let atCoderStatsCache: StatItem[] | null = null;

// Fetch AtCoder contest history from API
export async function fetchAtCoderStats(): Promise<StatItem[]> {
  // Return cached data if available
  if (atCoderStatsCache) {
    return atCoderStatsCache;
  }

  try {
    const response = await fetch("/api/atcoder");

    if (!response.ok) {
      throw new Error(`AtCoder API error: ${response.status}`);
    }

    const contests: AtCoderContest[] = await response.json();

    // Calculate stats
    const highestRating = Math.max(...contests.map((c) => c.NewRating));
    const currentRating =
      contests.length > 0 ? contests[contests.length - 1].NewRating : 0;

    const stats: StatItem[] = [
      {
        icon: null,
        value: (
          <>
            Highest rating: <CountUp from={0} to={highestRating} />
          </>
        ),
      },
      {
        icon: null,
        value: (
          <>
            Current rating: <CountUp from={0} to={currentRating} />
          </>
        ),
      },
    ];

    // Cache the result
    atCoderStatsCache = stats;

    return stats;
  } catch (error) {
    console.error("Failed to fetch AtCoder stats:", error);
    // Return empty stats on error
    return [];
  }
}
