import { portfolioData } from "@/data/portfolio";
import BlurText from "../BlurText";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Icon */}
        <div className={styles.iconWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portfolioData.icon}
            alt={portfolioData.name}
            className={styles.icon}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Name */}
          <h1 className={styles.name}>
            <BlurText
              text={portfolioData.name}
              delay={150}
              animateBy="words"
              direction="top"
              className={styles.name}
            />
          </h1>

          {/* Catchphrase */}
          <p className={styles.catchphrase}>
            <span className={styles.catchphraseLine}>
              Fullstack Development
            </span>
            <span className={styles.catchphraseSeparator}>×</span>
            <span className={styles.catchphraseLine}>
              Computer Vision Research
            </span>
          </p>

          {/* Strengths */}
          <div className={styles.strengths}>
            {portfolioData.strengths.map((strength) => (
              <span key={strength} className={styles.strengthBadge}>
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
