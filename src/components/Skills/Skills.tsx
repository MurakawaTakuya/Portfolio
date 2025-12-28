"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import type { SkillItem } from "@/types/portfolio";
import Stack from "@mui/joy/Stack";
import styles from "./Skills.module.scss";

// Map skill category keys to display names
const categoryDisplayNames: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  infrastructure: "Infrastructure",
  machineLearning: "Machine Learning",
  editor: "Editor",
  os: "OS",
  tool: "Tool",
  other: "Other",
};

// Order for displaying categories
const categoryOrder = [
  "frontend",
  "backend",
  "infrastructure",
  "machineLearning",
  "editor",
  "os",
  "tool",
  "other",
];

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section className={styles.skills}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <GlowingCards
        gap="1.5rem"
        padding="1rem 0"
        responsive={true}
        glowRadius={25}
      >
        {categoryOrder.map((categoryKey) => {
          const categorySkills = skills[
            categoryKey as keyof typeof skills
          ] as SkillItem[];
          const displayName = categoryDisplayNames[categoryKey];

          // Skip if no skills
          if (categorySkills.length === 0) {
            return null;
          }

          // TODO: どこかにクリックしたら公式ページに飛べるって書く
          // TODO: レベルの指標を書く
          return (
            <GlowingCard
              key={categoryKey}
              glowColor="#10b981"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.categoryTitle}>{displayName}</h3>
                <div className={styles.iconsContainer}>
                  {categorySkills.map((skill) => {
                    // Use skillicons.dev for known icons, custom icons for null
                    const iconSrc =
                      skill.iconName !== null
                        ? `https://skillicons.dev/icons?i=${skill.iconName}`
                        : `/skill_icons/${skill.name}.png`;

                    const isCustomIcon = skill.iconName === null;

                    return (
                      <a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.skillLink}
                      >
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            alignItems: "center",
                            backgroundColor: "rgba(20, 20, 20, 1)",
                            border: "1px solid rgba(255, 255, 255, 0.11)",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: "rgba(40, 40, 40, 1)",
                              borderColor: "rgba(255, 255, 255, 0.25)",
                            },
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={iconSrc}
                            alt={skill.name}
                            className={`${styles.skillIcon} ${isCustomIcon ? styles.customIcon : ""}`}
                          />
                          <span className={styles.skillName}>{skill.name}</span>
                        </Stack>
                      </a>
                    );
                  })}
                </div>
              </div>
            </GlowingCard>
          );
        })}
      </GlowingCards>
    </section>
  );
}
