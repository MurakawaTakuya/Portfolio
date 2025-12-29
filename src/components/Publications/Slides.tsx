"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import laprasData from "@/data/LAPRAS_API.json";
import { portfolioData } from "@/data/portfolio";
import Chip from "@mui/joy/Chip";
import styles from "./Publications.module.scss";

interface Slide {
  title: string;
  url: string;
  presentation_date?: Date | string;
}

interface SpeakerDeckSlide {
  title: string;
  url: string;
  star_count: number;
  view_count: number;
  description: string;
  presentation_date: string;
}

export default function Slides() {
  const portfolioSlides = portfolioData.publications.slides as Slide[];
  const speakerDeckSlides =
    laprasData.speaker_deck_slides as SpeakerDeckSlide[];

  // Combine SpeakerDeck slides and portfolio slides
  const allSlides: Slide[] = [
    ...speakerDeckSlides.map((slide) => ({
      title: slide.title,
      url: slide.url,
      presentation_date: new Date(slide.presentation_date),
    })),
    ...portfolioSlides,
  ];

  // Sort by presentation_date descending (newest first)
  const sortedSlides = allSlides.sort((a, b) => {
    const dateA = a.presentation_date
      ? new Date(a.presentation_date).getTime()
      : 0;
    const dateB = b.presentation_date
      ? new Date(b.presentation_date).getTime()
      : 0;
    return dateB - dateA; // Descending order
  });

  if (sortedSlides.length === 0) {
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
        {sortedSlides.map((slide, index) => (
          <GlowingCard key={index} glowColor="#10b981" className={styles.card}>
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
