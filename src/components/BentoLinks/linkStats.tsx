import laprasData from "@/data/LAPRAS_API.json";

// Get stats for specific links
export const getStatsForLink = (name: string): string[] => {
  if (name === "GitHub") {
    const repoCount = laprasData.github_repositories?.length || 0;
    return [`Public Repos: ${repoCount}`];
  }
  return [];
};
