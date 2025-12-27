import BentoLinks from "@/components/BentoLinks/BentoLinks";
import Hero from "@/components/Hero/Hero";
import Publications from "@/components/Publications/Publications";
import CareerTimeline from "@/components/Timeline/CareerTimeline";
import styles from "./page.module.scss";

export default function Home() {
  return (
    // mainの外にdivあるのは微妙かも
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Bento Links Section */}
        <Hero />
        <h1>Links</h1>
        {/* Bento Links Section */}
        <BentoLinks />
        {/* Skills */}
        {/* Timeline */}
        <CareerTimeline />
        {/* Projects / Publications */}
        <Publications />
        {/* Status */}
      </main>
      {/* TODO: copyright書く(コメントアウトも) */}
    </div>
  );
}
