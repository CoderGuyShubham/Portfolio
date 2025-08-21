import { SparkleIcon } from "lucide-react";
import React from "react";
import Carousel from "../../utilities/Carousel";
import Typing from "../../utilities/Typing";

const About = () => {
  const carouselItems = [
    "Animations",
    "Community",
    "Development",
    "Mentor",
    "Websites",
    "Designing",
    "Graphics",
  ];

  return (
    <div className="h-auto w-full pb-28 md:pb-40 px-4 md:px-10 overflow-hidden">
      {/* Marquee / Carousel Section */}
      <section className="relative -mx-10 flex overflow-hidden border-y border-carousel-border py-8">
        <div className="flex slide-animation gap-8">
          {carouselItems.concat(carouselItems).map((title, idx) => (
            <Carousel key={idx} title={title} showIcon />
          ))}
        </div>
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-carousel-gradient"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-carousel-gradient"></div>
      </section>

      {/* About Section */}
      <section className="mt-16 md:mt-24 text-center max-w-[1200px] mx-auto px-0">
        <span>
          <div className="flex items-center text-highlight justify-center gap-2">
            <SparkleIcon width={18} height={18} />
            <p className="font-clash-variable text-sm uppercase [word-spacing:4px]">
              About Me
            </p>
          </div>
        </span>

        <span>
          <Typing />
        </span>
      </section>
    </div>
  );
};

export default About;
