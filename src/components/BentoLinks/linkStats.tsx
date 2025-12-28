import laprasData from "@/data/LAPRAS_API.json";
import DescriptionIcon from "@mui/icons-material/Description";
import { fetchQiitaStats } from "./qiitaStats";

export interface StatItem {
  icon: React.ReactNode | null;
  value: string;
}

// Get stats for specific links (async)
export async function getStatsForLink(name: string): Promise<StatItem[]> {
  if (name === "GitHub") {
    const repoCount = laprasData.github_repositories?.length || 0;
    return [
      {
        icon: <DescriptionIcon fontSize="small" />,
        value: `${repoCount}`,
      },
    ];
  }

  if (name === "Qiita") {
    return await fetchQiitaStats();
  }

  if (name === "X (Twitter)") {
    return [
      {
        icon: null,
        value: "@MosiTaku",
      },
    ];
  }

  if (name === "SpeakerDeck") {
    const slideCount = laprasData.speaker_deck_slides?.length || 0;
    return [
      {
        icon: <DescriptionIcon fontSize="small" />,
        value: `${slideCount}`,
      },
    ];
  }

  return [];
}
