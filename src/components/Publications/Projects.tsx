"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import PublicIcon from "@mui/icons-material/Public";
import Chip from "@mui/joy/Chip";
import styles from "./Publications.module.scss";

interface ProjectLink {
  title: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  links: ProjectLink[];
  tags?: string[];
}

export default function Projects() {
  const projects = portfolioData.projects as Project[];

  if (projects.length === 0) {
    return null;
  }

  // Filter out dummy projects if needed, or just display as is.
  const displayProjects = projects.filter((p) => p.title !== "");

  if (displayProjects.length === 0) {
    return null;
  }

  return (
    <section className={styles.category}>
      <h2 className={styles.categoryTitle}>Projects</h2>
      <GlowingCards
        className={styles.cardsWrapper}
        gap="1.5rem"
        padding="1rem 0"
        responsive={true}
        glowRadius={25}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {displayProjects.map((project, index) => (
          <GlowingCard key={index} glowColor="#3b82f6" className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      size="sm"
                      variant="soft"
                      color="primary"
                      sx={{
                        padding: "2px 8px",
                        fontSize: "0.75rem",
                        color: "#93c5fd",
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div className={styles.links}>
                  {project.links.map((link, linkIndex) => (
                    <Chip
                      key={linkIndex}
                      color="neutral"
                      size="md"
                      variant="outlined"
                      startDecorator={<PublicIcon />}
                      onClick={() => {
                        if (link.url) {
                          window.open(link.url, "_blank");
                        }
                      }}
                      sx={{
                        cursor: link.url ? "pointer" : "default",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
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
