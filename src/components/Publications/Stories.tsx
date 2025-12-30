// これはpublicationsとは別かも
"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import styles from "./Publications.module.scss";

interface Story {
  title: string;
  category: string;
  description: string;
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "internship":
      return {
        color: "#60a5fa",
        borderColor: "rgba(96, 165, 250, 0.5)",
        bg: "rgba(96, 165, 250, 0.1)",
      };
    case "research":
      return {
        color: "#fb923c",
        borderColor: "rgba(251, 146, 60, 0.5)",
        bg: "rgba(251, 146, 60, 0.1)",
      };
    case "parttime":
      return {
        color: "#4ade80",
        borderColor: "rgba(74, 222, 128, 0.5)",
        bg: "rgba(74, 222, 128, 0.1)",
      };
    case "activities":
      return {
        color: "#a78bfa",
        borderColor: "rgba(167, 139, 250, 0.5)",
        bg: "rgba(167, 139, 250, 0.1)",
      };
    case "project":
      return {
        color: "#facc15",
        borderColor: "rgba(250, 204, 21, 0.5)",
        bg: "rgba(250, 204, 21, 0.1)",
      };
    default:
      return {
        color: "#f472b6",
        borderColor: "rgba(244, 114, 182, 0.5)",
        bg: "rgba(244, 114, 182, 0.1)",
      };
  }
};

export default function Stories() {
  const stories = portfolioData.stories as Story[];

  if (stories.length === 0) {
    return null;
  }

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>Stories</h2>
      <GlowingCards
        className={styles.cardsWrapper}
        gap="1.5rem"
        padding="1rem 0"
        responsive={true}
        glowRadius={25}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {stories.map((story, index) => {
          const colors = getCategoryColor(story.category);
          return (
            <GlowingCard
              key={index}
              glowColor={colors.color}
              className={styles.cardWide}
            >
              <div className={styles.cardContent}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3 className={styles.title} style={{ margin: 0 }}>
                    {story.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: colors.color,
                      border: `1px solid ${colors.borderColor}`,
                      backgroundColor: colors.bg,
                      padding: "2px 8px",
                      borderRadius: "12px",
                      textTransform: "capitalize",
                    }}
                  >
                    {story.category}
                  </span>
                </div>
                <p className={styles.description}>{story.description}</p>
              </div>
            </GlowingCard>
          );
        })}
      </GlowingCards>
    </section>
  );
}
