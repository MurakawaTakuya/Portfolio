"use client";

import GradientText from "@/components/GradientText";
import { TimelineLayout } from "@/components/timeline-layout";
import { portfolioData } from "@/data/portfolio";
import type { TimelineElement } from "@/types/timeline";
import styles from "./CareerTimeline.module.scss";

const CareerTimeline = () => {
  const categories = {
    career: { name: "学歴", color: "#3b82f6" },
    internship: { name: "インターン", color: "#10b981" },
    parttime: { name: "アルバイト", color: "#f59e0b" },
    activities: { name: "活動・所属", color: "#8b5cf6" },
    research: { name: "学会", color: "#ec4899" },
  };

  // Transform portfolio timeline data to TimelineElement format
  const careerEvents: TimelineElement[] = portfolioData.timeline.career.map(
    (item, index) => ({
      id: index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
      category: categories.career,
    })
  );

  const internshipEvents: TimelineElement[] =
    portfolioData.timeline.internship.map((item, index) => ({
      id: 100 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
      category: categories.internship,
    }));

  const parttimeEvents: TimelineElement[] = portfolioData.timeline.parttime.map(
    (item, index) => ({
      id: 200 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
      category: categories.parttime,
    })
  );

  const activitiesEvents: TimelineElement[] =
    portfolioData.timeline.activities.map((item, index) => ({
      id: 300 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
      category: categories.activities,
    }));

  const researchConferencesEvents: TimelineElement[] =
    portfolioData.researchConferences.map((item, index) => ({
      id: 400 + index,
      date: item.date,
      timestamp: item.timestamp,
      title: item.title,
      description: item.description || "",
      category: categories.research,
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
      <h1 className={styles.sectionTitle}>
        <GradientText
          colors={["#8b5cf6", "#ec4899", "#8b5cf6", "#ec4899", "#8b5cf6"]}
          animationSpeed={5}
          showBorder={false}
          direction="diagonal"
        >
          Timeline
        </GradientText>
      </h1>
      <TimelineLayout
        animate
        className="min-h-[600px] w-full max-w-2xl mx-auto"
        connectorColor="primary"
        iconColor="primary"
        items={timelineEvents}
        size="md"
      />
    </section>
  );
};

export default CareerTimeline;
