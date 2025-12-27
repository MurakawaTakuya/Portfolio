"use client";

import MagicBento, { BentoCardProps } from "@/components/MagicBento";
import { BENTO_BG_INTENSITY } from "@/constants/const";
import { portfolioData } from "@/data/portfolio";
import { mixWithBlack } from "@/lib/colorUtils";

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
          className="rounded-xl !p-2 flex items-center justify-center"
          style={{
            backgroundColor: pLink.iconBackgroundColor || "#d1d5db", // Fallback to gray-300
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pLink.iconLink}
            alt={pLink.name}
            className="size-10 object-contain"
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
    <section className="w-full flex justify-center py-1">
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
