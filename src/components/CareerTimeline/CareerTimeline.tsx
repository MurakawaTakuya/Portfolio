"use client";

import {
  ScrollTimeline,
  TimelineEvent,
} from "@/components/lightswind/scroll-timeline";
import { portfolioData } from "@/data/portfolio";

const CareerTimeline = () => {
  // Transform portfolio timeline data to ScrollTimeline format
  const careerEvents: TimelineEvent[] = portfolioData.timeline.career.map(
    (item, index) => ({
      id: `career-${index}`,
      year: item.date,
      title: item.title,
    })
  );

  const internshipEvents: TimelineEvent[] =
    portfolioData.timeline.internship.map((item, index) => ({
      id: `internship-${index}`,
      year: item.date,
      title: item.title,
      description: item.description,
    }));

  const parttimeEvents: TimelineEvent[] = portfolioData.timeline.parttime.map(
    (item, index) => ({
      id: `parttime-${index}`,
      year: item.date,
      title: item.title,
      description: item.description,
    })
  );

  const activitiesEvents: TimelineEvent[] =
    portfolioData.timeline.activities.map((item, index) => ({
      id: `activities-${index}`,
      year: item.date,
      title: item.title,
      description: item.description,
    }));

  // Combine all events and sort by date
  const timelineEvents = [
    ...careerEvents,
    ...internshipEvents,
    ...parttimeEvents,
    ...activitiesEvents,
  ].sort((a, b) => {
    return a.year.localeCompare(b.year);
  });

  return (
    <ScrollTimeline
      events={timelineEvents}
      title="Timeline"
      subtitle="経歴と活動の軌跡"
      cardAlignment="right"
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
