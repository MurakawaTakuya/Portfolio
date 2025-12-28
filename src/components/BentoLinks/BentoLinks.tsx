"use client";

import MagicBento, { BentoCardProps } from "@/components/MagicBento";
import { BENTO_BG_INTENSITY, BENTO_ICON_SIZE } from "@/constants/const";
import { portfolioData } from "@/data/portfolio";
import { mixWithBlack } from "@/lib/colorUtils";
import styles from "./BentoLinks.module.scss";

// Define the shape of the link object from portfolioData
interface PortfolioLink {
  url: string;
  name: string;
  iconLink: string;
  width?: number;
  height?: number;
  iconBackgroundColor?: string;
  backgroundColor?: string;
}

// Convert portfolio links to BentoCardProps
const createLinkCards = (): BentoCardProps[] => {
  return portfolioData.links.map((link) => {
    const pLink = link as PortfolioLink;
    const baseColor = pLink.iconBackgroundColor || "#000000";
    const backgroundColor =
      pLink.backgroundColor || mixWithBlack(baseColor, BENTO_BG_INTENSITY);

    return {
      color: backgroundColor,
      icon: (
        <div
          className={styles.iconContainer}
          style={{
            backgroundColor: pLink.iconBackgroundColor || "#d1d5db", // Fallback to gray-300
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pLink.iconLink}
            alt={pLink.name}
            className={styles.icon}
            style={{
              width: `${BENTO_ICON_SIZE}rem`,
              height: `${BENTO_ICON_SIZE}rem`,
            }}
          />
        </div>
      ),
      title: pLink.name,
      href: pLink.url,
      width: pLink.width,
      height: pLink.height,
    };
  });
};

export default function BentoLinks() {
  const linkCards = createLinkCards();

  return (
    <section className={styles.bentoLinks}>
      <MagicBento
        cards={linkCards}
        enableStars={true}
        enableSpotlight={false}
        spotlightRadius={50}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        glowColor="255, 255, 255"
        borderColor="rgba(255, 255, 255, 0.15)"
        textAutoHide={false}
      />
    </section>
  );
}
