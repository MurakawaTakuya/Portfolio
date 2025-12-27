import Papers from "./Papers";
import styles from "./Publications.module.scss";
import Slides from "./Slides";

export default function Publications() {
  return (
    <section className={styles.publications}>
      <h1 className={styles.sectionTitle}>Publications</h1>
      <Papers />
      <Slides />
    </section>
  );
}
