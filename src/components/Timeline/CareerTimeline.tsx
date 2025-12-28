"use client";

import { TimelineLayout } from "@/components/timeline-layout";
import { portfolioData } from "@/data/portfolio";
import type { TimelineElement } from "@/types/timeline";
import styles from "./CareerTimeline.module.scss";

const CareerTimeline = () => {
  // Transform portfolio timeline data to TimelineElement format
  const careerEvents: TimelineElement[] = portfolioData.timeline.career.map(
    (item, index) => ({
      id: index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
    })
  );

  const internshipEvents: TimelineElement[] =
    portfolioData.timeline.internship.map((item, index) => ({
      id: 100 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
    }));

  const parttimeEvents: TimelineElement[] = portfolioData.timeline.parttime.map(
    (item, index) => ({
      id: 200 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
    })
  );

  const activitiesEvents: TimelineElement[] =
    portfolioData.timeline.activities.map((item, index) => ({
      id: 300 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
    }));

  const researchConferencesEvents: TimelineElement[] =
    portfolioData.researchConferences.map((item, index) => ({
      id: 400 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
    }));

  // Combine all events and sort by timestamp
  const timelineEvents = [
    ...careerEvents,
    ...internshipEvents,
    ...parttimeEvents,
    ...activitiesEvents,
    ...researchConferencesEvents,
  ]
    .sort((a, b) => {
      return a.timestamp.getTime() - b.timestamp.getTime();
    })
    .reverse();

  return (
    <section className={styles.timeline}>
      <h1 className={styles.sectionTitle}>Timeline</h1>
      <TimelineLayout
        animate
        className="min-h-[600px] w-full max-w-2xl mx-auto p-8"
        connectorColor="primary"
        iconColor="primary"
        items={timelineEvents}
        size="md"
      />
    </section>
  );
};

export default CareerTimeline;
