"use client";

import MagicBento, { BentoCardProps } from "@/components/MagicBento";
import { portfolioData } from "@/data/portfolio";

// Convert portfolio links to BentoCardProps
const createLinkCards = (): BentoCardProps[] => {
  return portfolioData.links.map((link) => ({
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={link.iconLink}
        alt={link.name}
        className="size-8 object-contain"
      />
    ),
    title: link.name,
    href: link.url,
  }));
};

export default function BentoLinks() {
  const linkCards = createLinkCards();

  return (
    <section className="w-full flex justify-center py-8">
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
