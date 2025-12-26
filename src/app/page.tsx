import BentoLinks from "@/components/BentoLinks/BentoLinks";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Bento Links Section */}
        <BentoLinks />
      </main>
    </div>
  );
}
