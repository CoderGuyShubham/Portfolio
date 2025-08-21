import { assets } from "@/assets/assets";
import Footer from "@/layout/Footer";
import Carousel from "@/utilities/Carousel";
import React from "react";

const AboutSection = () => {
  const duplicated = [...assets, ...assets];

  return (
    <div className="h-auto w-full px-4 md:px-10 overflow-hidden">
      <span>
        <section className="relative -mx-10 flex overflow-hidden border-y border-carousel-border py-8">
          <div className="flex slide-animation gap-4">
            {duplicated.map((item, index)=>(
              <div key={index} className="flex-center px-6 py-2 rounded-full gap-2 bg-body-secondary">
                <img src={item.src} alt={item.title} className="w-5 h-5" />
                <p className="text-sm font-satoshi-variable text-nowrap">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f6f9fa]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f6f9fa]"></div>
        </section>
      </span>
      <Footer />
    </div>
  );
};

export default AboutSection;
