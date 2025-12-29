"use client";

import type { StatItem } from "@/components/BentoLinks/linkStats";
import Chip from "@mui/joy/Chip";

interface StatsChipsProps {
  stats: StatItem[];
  className?: string;
}

export default function StatsChips({ stats, className = "" }: StatsChipsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {stats.map((stat, idx) => (
        <Chip
          key={idx}
          size="sm"
          variant="soft"
          color="neutral"
          startDecorator={stat.icon}
          sx={{
            padding: "2px 8px",
            fontSize: "0.8rem",
            color: "#d1d5db",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(4px)",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          {stat.value}
        </Chip>
      ))}
    </div>
  );
}
