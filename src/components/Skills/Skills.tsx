"use client";

import {
  GlowingCard,
  GlowingCards,
} from "@/components/lightswind/glowing-cards";
import { portfolioData } from "@/data/portfolio";
import type { SkillItem } from "@/types/portfolio";
import styles from "./Skills.module.scss";

// Map skill category keys to display names
const categoryDisplayNames: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  infrastructure: "Infrastructure",
  machineLearning: "Machine Learning",
  editor: "Editor",
  os: "OS",
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
        glowRadius={20}
      >
        {categoryOrder.map((categoryKey) => {
          const categorySkills = skills[
            categoryKey as keyof typeof skills
          ] as SkillItem[];
          const displayName = categoryDisplayNames[categoryKey];

          // Filter skills with valid iconName (not null)
          const skillsWithIcons = categorySkills.filter(
            (skill) => skill.iconName !== null
          );

          // Skip if no skills with icons
          if (skillsWithIcons.length === 0) {
            return null;
          }

          return (
            <GlowingCard
              key={categoryKey}
              glowColor="#10b981"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.categoryTitle}>{displayName}</h3>
                <div className={styles.iconsContainer}>
                  {skillsWithIcons.map((skill) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={skill.name}
                      src={`https://skillicons.dev/icons?i=${skill.iconName}`}
                      alt={skill.name}
                      className={styles.skillIcon}
                      title={skill.name}
                    />
                  ))}
                </div>
              </div>
            </GlowingCard>
          );
        })}
      </GlowingCards>
    </section>
  );
}
