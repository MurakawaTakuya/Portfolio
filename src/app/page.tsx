import BentoLinks from "@/components/BentoLinks/BentoLinks";
import Hero from "@/components/Hero/Hero";
import Publications from "@/components/Publications/Publications";
import Skills from "@/components/Skills/Skills";
import CareerTimeline from "@/components/Timeline/CareerTimeline";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.contents}>
      <Hero />
      {/* Bento Links Section */}
      <BentoLinks />
      {/* Timeline */}
      <CareerTimeline />
      {/* Skills */}
      <Skills />
      {/* Projects / Publications */}
      <Publications />
      {/* Status */}
    </div>
  );
}
