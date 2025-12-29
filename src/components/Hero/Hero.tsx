import { portfolioData } from "@/data/portfolio";
import BlurText from "../BlurText";
import ShinyText from "../ShinyText";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Top Zone: Icon + Name + Catchphrase */}
      <div className={styles.topZone}>
        {/* Icon */}
        <div className={styles.iconWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portfolioData.aboutme.icon}
            alt={portfolioData.aboutme.name}
            className={styles.icon}
          />
        </div>

        {/* Name and Catchphrase */}
        <div className={styles.nameSection}>
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
        </div>
      </div>

      {/* Bottom Zone: Introduction (Strengths, Bio) */}
      <div className={styles.introZone}>
        {/* Strengths */}
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Strengths</span>
          <div className={styles.strengths}>
            {portfolioData.aboutme.strengths.map((strength) => (
              <span key={strength} className={styles.strengthBadge}>
                {strength}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Bio</span>
          <p className={styles.bio}>{portfolioData.aboutme.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
