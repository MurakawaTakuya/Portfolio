import laprasData from "@/data/LAPRAS_API.json";
import DescriptionIcon from "@mui/icons-material/Description";
import FestivalIcon from "@mui/icons-material/Festival";
import HearingIcon from "@mui/icons-material/Hearing";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { fetchAtCoderStats } from "./atcoderStats";
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
        icon: null,
        value: `Public Repos: ${repoCount}`,
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

  if (name === "Connpass") {
    const events = laprasData.events || [];

    // Count events by category
    const organizedCount = events.filter((event) => event.is_organizer).length;
    const presentedCount = events.filter((event) => event.is_presenter).length;
    const attendedCount = events.filter(
      (event) => !event.is_organizer && !event.is_presenter
    ).length;

    return [
      {
        icon: <FestivalIcon fontSize="small" />,
        value: `${organizedCount}`,
      },
      {
        icon: <RecordVoiceOverIcon fontSize="small" />,
        value: `${presentedCount}`,
      },
      {
        icon: <HearingIcon fontSize="small" />,
        value: `${attendedCount}`,
      },
    ];
  }

  if (name === "AtCoder") {
    return await fetchAtCoderStats();
  }

  return [];
}
