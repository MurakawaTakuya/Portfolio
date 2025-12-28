import laprasData from "@/data/LAPRAS_API.json";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import type { StatItem } from "./linkStats";

// Qiita API response interface
interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  likes_count: number;
  stocks_count: number;
  page_views_count: number | null;
  created_at: string;
  updated_at: string;
  tags: Array<{ name: string; versions: string[] }>;
  comments_count: number;
}

// Cache for Qiita stats
let qiitaStatsCache: StatItem[] | null = null;

// Fallback stats using LAPRAS data when API fails
function getFallbackQiitaStats(): StatItem[] {
  const articleCount = laprasData.qiita_articles?.length || 0;
  const totalStocks =
    laprasData.qiita_articles?.reduce(
      (sum, article) => sum + (article.stockers_count || 0),
      0
    ) || 0;

  return [
    {
      icon: <DescriptionIcon fontSize="small" />,
      value: `${articleCount}`,
    },
    {
      icon: <BookmarkBorderIcon fontSize="small" />,
      value: `${totalStocks}`,
    },
    {
      icon: <RemoveRedEyeIcon fontSize="small" />,
      value: "185k+",
    },
  ];
}

// Fetch Qiita articles from API
export async function fetchQiitaStats(): Promise<StatItem[]> {
  // Return cached data if available
  if (qiitaStatsCache) {
    return qiitaStatsCache;
  }

  try {
    const response = await fetch(
      "https://qiita.com/api/v2/users/Murakawa_Takuya/items?per_page=100"
    );

    if (!response.ok) {
      throw new Error(`Qiita API error: ${response.status}`);
    }

    const articles: QiitaArticle[] = await response.json();

    const articleCount = articles.length;
    const totalLikes = articles.reduce(
      (sum, article) => sum + (article.likes_count || 0),
      0
    );
    const totalStocks = articles.reduce(
      (sum, article) => sum + (article.stocks_count || 0),
      0
    );

    const stats: StatItem[] = [
      {
        icon: <DescriptionIcon fontSize="small" />,
        value: `${articleCount}`,
      },
      {
        icon: <FavoriteBorderIcon fontSize="small" />,
        value: `${totalLikes}`,
      },
      {
        icon: <BookmarkBorderIcon fontSize="small" />,
        value: `${totalStocks}`,
      },
      {
        icon: <RemoveRedEyeIcon fontSize="small" />,
        value: "185k+",
      },
    ];

    // Cache the result
    qiitaStatsCache = stats;

    return stats;
  } catch (error) {
    console.error("Failed to fetch Qiita stats:", error);
    // Return fallback stats from LAPRAS data
    return getFallbackQiitaStats();
  }
}
