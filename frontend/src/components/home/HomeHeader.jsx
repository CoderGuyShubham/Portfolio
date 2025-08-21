import React from "react";
import Button from "../../utilities/Button";
import HandIcon from "../../utilities/HandIcon";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 md:px-10 h-auto flex flex-col items-center pt-36 md:pt-44 pb-16 md:pb-24">
      <section className="w-full max-w-[1200px] flex flex-col justify-center">
        {/* Intro */}
        <span>
          <p className="flex gap-2 font-satoshi-regular text-base items-center">
            <span className="text-highlight">
              <HandIcon width={48} height={48} />
            </span>
            Hey! It's me Shubham,
          </p>
        </span>

        {/* Heading */}
        <span>
          <h1 className="text-5xl md:text-7xl font-clash-medium max-w-4xl mt-8">
            Crafting{" "}
            <span className="text-highlight">purpose driven experiences</span>{" "}
            that inspire & engage.
          </h1>
        </span>

        {/* Description with divider */}
        <span>
          <div className="md:flex-center mt-8 flex items-center flex-col gap-4 md:flex-row">
            <div className="h-[1px] bg-[#e8ecf3] w-full"></div>
            <p className="font-satoshi-regular w-full leading-[1.4]">
              I work with brands globally to build pixel-perfect, engaging, and
              accessible digital experiences that drive results and achieve
              business goals.
            </p>
          </div>
        </span>

        {/* Links + Button */}
        <span>
          <div className="font-satoshi-regular mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            {/* Social Links */}
            <ul className="hidden h-fit gap-4 md:flex uppercase text-sm">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center gap-2 transition hover:text-highlight"
                  href="https://www.linkedin.com/in/coderguyshubham/"
                >
                  LinkedIn
                  <ArrowUpRight width={16} height={16} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center gap-2 transition hover:text-highlight"
                  href="https://github.com/CoderGuyShubham"
                >
                  Github
                  <ArrowUpRight width={16} height={16} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center gap-2 transition hover:text-highlight"
                  href="mailto:singhshubham889900@gmail.com"
                >
                  Gmail
                  <ArrowUpRight width={16} height={16} />
                </a>
              </li>
            </ul>

            <Link to="/about">
              <Button initialText="Know me better" hoverText="About me" />
            </Link>
          </div>
        </span>
      </section>
    </header>
  );
};

export default Header;
