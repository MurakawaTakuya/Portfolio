import CountUp from "@/components/CountUp";
import type { StatItem } from "./linkStats";

// WakaTime API response interface
interface WakaTimeStats {
  data: {
    total_seconds_including_other_language: number;
    daily_average_including_other_language: number;
  };
}

// Cache for WakaTime stats
let cachedStats: StatItem[] | null = null;

export async function getWakaTimeStats(): Promise<StatItem[]> {
  // Return cached stats if available
  if (cachedStats) {
    return cachedStats;
  }

  try {
    const response = await fetch("/api/wakatime");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: WakaTimeStats = await response.json();

    // Convert seconds to hours and minutes
    const totalHours = Math.floor(
      data.data.total_seconds_including_other_language / 3600
    );
    const totalMinutes = Math.floor(
      (data.data.total_seconds_including_other_language % 3600) / 60
    );

    const avgHours = Math.floor(
      data.data.daily_average_including_other_language / 3600
    );
    const avgMinutes = Math.floor(
      (data.data.daily_average_including_other_language % 3600) / 60
    );

    const stats: StatItem[] = [
      {
        icon: null,
        value: (
          <>
            Coding Time: <CountUp from={0} to={totalHours} />h{" "}
            <CountUp from={0} to={totalMinutes} />m
          </>
        ),
      },
      {
        icon: null,
        value: (
          <>
            Daily Average: <CountUp from={0} to={avgHours} />h{" "}
            <CountUp from={0} to={avgMinutes} />m
          </>
        ),
      },
    ];

    // Cache the result
    cachedStats = stats;
    return stats;
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return [];
  }
}
