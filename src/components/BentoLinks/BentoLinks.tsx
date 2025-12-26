"use client";

import MagicBento, { BentoCardProps } from "@/components/MagicBento";
import { portfolioData } from "@/data/portfolio";

// Define the shape of the link object from portfolioData
interface PortfolioLink {
  url: string;
  name: string;
  iconLink: string;
  width?: number;
  height?: number;
}

// Convert portfolio links to BentoCardProps
const createLinkCards = (): BentoCardProps[] => {
  return portfolioData.links.map((link) => {
    const pLink = link as PortfolioLink;
    return {
      icon: (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={pLink.iconLink}
          alt={pLink.name}
          className="size-8 object-contain"
        />
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
        enableStars={false}
        enableSpotlight={false}
        spotlightRadius={50}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        glowColor="100, 130, 255"
        textAutoHide={false}
      />
    </section>
  );
}
