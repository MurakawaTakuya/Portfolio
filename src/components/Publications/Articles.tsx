"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Chip from "@mui/joy/Chip";
import { useEffect, useState } from "react";
import styles from "./Publications.module.scss";

interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  likes_count: number;
  stocks_count: number;
  created_at: string;
  updated_at: string;
  tags: Array<{ name: string; versions: string[] }>;
}

const customArticles = portfolioData.publications.articles;

// TODO: 閲覧数も表示する
export default function Articles() {
  const [articles, setArticles] = useState<QiitaArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://qiita.com/api/v2/users/Murakawa_Takuya/items?per_page=100"
        );
        if (!response.ok) {
          throw new Error(`Qiita API error: ${response.status}`);
        }
        const data: QiitaArticle[] = await response.json();
        // Sort by likes_count descending (most likes first)
        const sortedArticles = data.sort((a, b) => {
          return b.likes_count - a.likes_count;
        });
        setArticles(sortedArticles);
      } catch (error) {
        console.error("Failed to fetch Qiita articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className={styles.category}>
        <h2 className={styles.categoryTitle}>Articles</h2>
        <p style={{ color: "#888" }}>Loading...</p>
      </section>
    );
  }

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
        {/* Qiita Articles */}
        {articles.map((article) => (
          <GlowingCard
            key={article.id}
            glowColor="#55c500"
            className={styles.card}
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{article.title}</h3>
                <div className={styles.articleStats}>
                  <span className={styles.statItem}>
                    <FavoriteBorderIcon sx={{ fontSize: 16, color: "#888" }} />
                    {article.likes_count}
                  </span>
                  <span className={styles.statItem}>
                    <BookmarkBorderIcon sx={{ fontSize: 16, color: "#888" }} />
                    {article.stocks_count}
                  </span>
                </div>
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
                      {tag.name}
                    </Chip>
                  ))}
                </div>
              </div>
            </a>
          </GlowingCard>
        ))}

        {/* Custom Articles from portfolio.ts */}
        {customArticles.map((article, index) => (
          <GlowingCard
            key={`custom-${index}`}
            glowColor="#6366f1"
            className={styles.card}
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
              </div>
            </a>
          </GlowingCard>
        ))}
      </GlowingCards>
    </section>
  );
}
