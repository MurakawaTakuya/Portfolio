"use client";

import {
  ScrollTimeline,
  TimelineEvent,
} from "@/components/lightswind/scroll-timeline";
import { portfolioData } from "@/data/portfolio";

const CareerTimeline = () => {
  // Transform portfolio timeline data to ScrollTimeline format
  const timelineEvents: TimelineEvent[] = portfolioData.timeline.career.map(
    (item, index) => ({
      id: `career-${index}`,
      year: item.date,
      title: item.title,
      subtitle:
        item.type === "education"
          ? "学業"
          : item.type === "internship"
            ? "インターン"
            : "活動",
      description: item.description,
    })
  );

  return (
    <ScrollTimeline
      events={timelineEvents}
      title="Timeline"
      subtitle="経歴と活動の軌跡"
      cardAlignment="alternating"
      cardVariant="filled"
      cardEffect="shadow"
      revealAnimation="none"
      revealAnimationDelay={0}
      revealAnimationDuration={0.5}
      connectorStyle="dots"
      darkMode={true}
      progressIndicator={true}
    />
  );
};

export default CareerTimeline;
