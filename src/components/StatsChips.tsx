"use client";

import Chip from "@mui/joy/Chip";

interface StatsChipsProps {
  stats: string[];
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
          sx={{ fontSize: "0.75rem" }}
        >
          {stat}
        </Chip>
      ))}
    </div>
  );
}
