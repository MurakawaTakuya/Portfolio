"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import laprasData from "@/data/LAPRAS_API.json";
import Chip from "@mui/joy/Chip";
import styles from "./Publications.module.scss";

interface QiitaArticle {
  title: string;
  url: string;
  tags: string[];
  stockers_count: number;
  updated_at: string;
}

export default function Articles() {
  const articles = laprasData.qiita_articles as QiitaArticle[];

  if (articles.length === 0) {
    return null;
  }

  // Sort by updated_at descending (newest first)
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>Articles</h2>
      <GlowingCards
        className={styles.cardsWrapper}
        gap="1.5rem"
        padding="1rem 0"
        responsive={true}
        glowRadius={25}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {sortedArticles.map((article, index) => (
          <GlowingCard key={index} glowColor="#55c500" className={styles.card}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{article.title}</h3>
                <div className={styles.tags}>
                  {article.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      size="sm"
                      variant="soft"
                      color="neutral"
                      sx={{
                        padding: "2px 8px",
                        fontSize: "0.75rem",
                        color: "#d1d5db",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(4px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderColor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
            </a>
          </GlowingCard>
        ))}
      </GlowingCards>
    </section>
  );
}
