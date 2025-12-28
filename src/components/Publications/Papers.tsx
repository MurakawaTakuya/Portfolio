"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import Chip from "@mui/joy/Chip";
import styles from "./Publications.module.scss";

interface PaperLink {
  title: string;
  url: string;
}

interface Paper {
  date: string;
  title: string;
  authors: string;
  description?: string;
  abstract?: string;
  links?: PaperLink[];
}

export default function Papers() {
  const papers = portfolioData.publications.papers as Paper[];

  if (papers.length === 0) {
    return null;
  }

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>Papers</h2>
      <GlowingCards
        gap="1.5rem"
        padding="1rem 0"
        responsive={true}
        glowRadius={25}
      >
        {papers
          .slice()
          .reverse()
          .map((paper, index) => (
            <GlowingCard
              key={index}
              glowColor="#8b5cf6"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <span className={styles.date}>{paper.date}</span>
                <h3 className={styles.title}>{paper.title}</h3>
                <p className={styles.authors}>{paper.authors}</p>
                {paper.description && (
                  <p className={styles.description}>{paper.description}</p>
                )}
                {paper.links && paper.links.length > 0 && (
                  <div className={styles.links}>
                    {paper.links.map((link, linkIndex) => (
                      // TODO: chipにアイコンを追加
                      <Chip
                        key={linkIndex}
                        color="neutral"
                        size="md"
                        variant="outlined"
                        onClick={() => {
                          if (link.url !== "TBW") {
                            window.open(link.url, "_blank");
                          }
                        }}
                        sx={{
                          cursor: link.url !== "TBW" ? "pointer" : "default",
                          opacity: link.url === "TBW" ? 0.5 : 1,
                        }}
                      >
                        {link.title}
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
            </GlowingCard>
          ))}
      </GlowingCards>
    </section>
  );
}
