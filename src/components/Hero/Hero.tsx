import { portfolioData } from "@/data/portfolio";
import BlurText from "../BlurText";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center select-none">
      {/* Icon */}
      <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portfolioData.icon}
          alt={portfolioData.name}
          className="object-cover w-full h-full rounded-full border-4 border-white/10 shadow-lg"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
        <BlurText
          text={portfolioData.name}
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white"
        />
      </h1>

      {/* Catchphrase */}
      <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl px-4 leading-relaxed">
        {portfolioData.catchphrase}
      </p>

      {/* Strengths */}
      <div className="flex flex-wrap gap-3 justify-center px-4">
        {portfolioData.strengths.map((strength) => (
          <span
            key={strength}
            className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm md:text-base text-gray-300 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:text-white"
          >
            {strength}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
