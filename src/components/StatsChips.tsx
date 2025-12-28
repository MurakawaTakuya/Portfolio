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
          }}
        >
          {stat.value}
        </Chip>
      ))}
    </div>
  );
}
