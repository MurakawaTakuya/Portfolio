import laprasData from "@/data/LAPRAS_API.json";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export interface StatItem {
  icon: React.ReactNode | null;
  value: string;
}

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

// Cache for Qiita stats to avoid excessive API calls
let qiitaStatsCache: StatItem[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch Qiita articles from API
async function fetchQiitaStats(): Promise<StatItem[]> {
  // Check cache first
  if (
    qiitaStatsCache &&
    cacheTimestamp &&
    Date.now() - cacheTimestamp < CACHE_DURATION
  ) {
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

    // Update cache
    qiitaStatsCache = stats;
    cacheTimestamp = Date.now();

    return stats;
  } catch (error) {
    console.error("Failed to fetch Qiita stats:", error);
    // Return fallback stats from LAPRAS data
    return getFallbackQiitaStats();
  }
}

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

  return [];
}
