"use client";

import GradientText from "@/components/GradientText";
import Articles from "./Articles";
import Papers from "./Papers";
import styles from "./Publications.module.scss";
import Slides from "./Slides";

export default function Publications() {
  return (
    <section className={styles.publications}>
      <h1 className={styles.sectionTitle}>
        <GradientText
          colors={["#f97316", "#ef4444", "#f97316", "#ef4444", "#f97316"]}
          animationSpeed={5}
          showBorder={false}
          direction="diagonal"
        >
          Publications
        </GradientText>
      </h1>
      <Papers />
      <Slides />
      <Articles />
    </section>
  );
}
