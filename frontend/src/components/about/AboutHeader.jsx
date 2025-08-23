import React from "react";
import CircularText from "../../utilities/CircularText";
import { ArrowUpRight } from "lucide-react";
import Button from "../../utilities/Button";
import { Link } from "react-router-dom";
import { images } from "@/assets/assets";

const AboutHeader = () => {
  return (
    <div className="px-4 md:px-10 h-auto flex flex-col items-center pt-20 md:pt-28 pb-16 md:pb-21 overflow-hidden">
      <span>
        <section className="w-full max-w-[1200px] flex items-center flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="relative w-full sm:w-1/2">
            <div className=" w-full overflow-hidden rounded-b-full aspect-3/4 ">
              <img
                src={images.dp2}
                // width={400}
                // height={600}
                alt="profile"
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
              />
            </div>
            <Link to="/contact">
              <div className="absolute bg-white bottom-0 right-0 rounded-full p-2 shadow-md">
                <CircularText
                  text="LETS TALK • LETS TALK • LETS TALK • LETS TALK • "
                  onHover="slowDown"
                  spinDuration={10}
                  className="font-satoshi-variable font-normal "
                />

                <div className="border-[1px] border-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-min w-min rounded-full p-6 sm:p-3 lg:p-6 hover:rotate-45 transition-all duration-300 ">
                  <ArrowUpRight
                    // height={18}
                    // width={18}
                    strokeWidth={1}
                    className="h-4 w-4 "
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full space-y-6">
            <h1 className="text-balance font-clash-medium text-5xl sm:text-5xl lg:text-7xl">
              A <span className="text-highlight">creative developer</span> &
              digital designer
            </h1>
            <p className="font-satoshi-regular text-balance">
              I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals.
            </p>
            <a
              href="https://docs.google.com/document/d/16I_5I9P76pvzkWiaDyLpEgcQlQYEkZsYQPBFTGUbC5s/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button initialText="My Resume" hoverText="My Resume" />
            </a>
          </div>
        </section>
      </span>
    </div>
  );
};

export default AboutHeader;
