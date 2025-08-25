import React from "react";
import CircularText from "../../utilities/CircularText";
import { ArrowUpRight } from "lucide-react";
import Button from "../../utilities/Button";
import { Link } from "react-router-dom";
import { images } from "@/assets/assets";

const AboutHeader = () => {
  return (
    <div className="px-4 md:px-10 h-auto flex flex-col items-center pt-20 md:pt-28 pb-16 md:pb-21 overflow-hidden">
      <section className="w-full max-w-[1200px] flex items-center flex-col sm:flex-row gap-8 sm:gap-16">
        <div
          data-aos="fade"
          data-aos-offset="0"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-delay="0"
          className="relative w-full sm:w-1/2"
        >
          <div className=" w-full overflow-hidden rounded-b-full aspect-3/4">
            <img
              src={images.dp2}
              alt="profile"
              className="h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
            />
          </div>
          <Link to="/contact">
            <div className="absolute bg-body-secondary bottom-0 right-0 rounded-full p-2 shadow-md">
              <CircularText
                text="LETS TALK • LETS TALK • LETS TALK • LETS TALK • "
                onHover="slowDown"
                spinDuration={10}
                className="font-satoshi-variable font-normal text-primary"
              />

              <div className="border-[1px] border-input-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-min w-min rounded-full p-6 sm:p-3 lg:p-6 hover:rotate-45 transition-all duration-300 ">
                <ArrowUpRight strokeWidth={1} className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full space-y-6">
          <h1
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="100"
            className="text-balance font-clash-medium text-5xl sm:text-5xl lg:text-7xl"
          >
            A <span className="text-highlight">creative developer</span> &
            digital designer
          </h1>
          <p
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="200"
            className="font-satoshi-regular text-balance"
          >
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>
          <a
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="300"
            href="https://docs.google.com/document/d/16I_5I9P76pvzkWiaDyLpEgcQlQYEkZsYQPBFTGUbC5s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button initialText="My Resume" hoverText="My Resume" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;
