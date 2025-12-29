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
            src={portfolioData.aboutme.icon}
            alt={portfolioData.aboutme.name}
            className={styles.icon}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Name */}
          <h1 className={styles.name}>
            <BlurText
              text={portfolioData.aboutme.name}
              delay={250}
              stepDuration={0.4}
              animateBy="words"
              direction="top"
              className={styles.name}
            />
          </h1>

          {/* Catchphrase */}
          <p className={styles.catchphrase}>
            <ShinyText disabled={false} speed={2}>
              <span className={styles.catchphraseLine}>
                Fullstack Development
              </span>
              <span className={styles.catchphraseSeparator}>×</span>
              <span className={styles.catchphraseLine}>
                Computer Vision Research
              </span>
            </ShinyText>
          </p>

          {/* Strengths */}
          <div className={styles.strengths}>
            {portfolioData.aboutme.strengths.map((strength) => (
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
