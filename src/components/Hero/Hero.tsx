import { portfolioData } from "@/data/portfolio";
import BlurText from "../BlurText";
import ShinyText from "../ShinyText";
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
              <ShinyText
                text="Fullstack Development"
                disabled={false}
                speed={3}
              />
            </span>
            <span className={styles.catchphraseSeparator}>×</span>
            <span className={styles.catchphraseLine}>
              <ShinyText
                text="Computer Vision Research"
                disabled={false}
                speed={3}
              />
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
