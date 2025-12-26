import BentoLinks from "@/components/BentoLinks/BentoLinks";
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Bento Links Section */}
        <Hero />
        {/* Bento Links Section */}
        <BentoLinks />
      </main>
      {/* TODO: copyright書く(コメントアウトも) */}
    </div>
  );
}
