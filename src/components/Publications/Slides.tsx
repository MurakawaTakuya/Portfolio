"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import Chip from "@mui/joy/Chip";
import styles from "./Publications.module.scss";

interface Slide {
  title: string;
  url: string;
}

export default function Slides() {
  const slides = portfolioData.publications.slides as Slide[];

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>Slides</h2>
      <GlowingCards
        gap="1.5rem"
        padding="1rem 0"
        responsive={true}
        glowRadius={25}
      >
        {slides
          .slice()
          .reverse()
          .map((slide, index) => (
            <GlowingCard
              key={index}
              glowColor="#10b981"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{slide.title}</h3>
                <div className={styles.links}>
                  <Chip
                    color="neutral"
                    size="md"
                    variant="outlined"
                    onClick={() => window.open(slide.url, "_blank")}
                    sx={{ cursor: "pointer" }}
                  >
                    View Slides
                  </Chip>
                </div>
              </div>
            </GlowingCard>
          ))}
      </GlowingCards>
    </section>
  );
}
