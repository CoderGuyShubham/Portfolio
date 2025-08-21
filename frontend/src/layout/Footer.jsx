import React from "react";
import Button from "../utilities/Button";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-body w-full py-10 flex items-center flex-col h-auto px-4 md:px-10">
      <div className="bg-body-secondary rounded-3xl flex justify-center flex-col max-w-[1200px] w-full py-14 px-6 md:px-12 items-center">
        <div className="rounded-4xl flex-center gap-2 bg-work-btn px-4 py-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="bg-highlight absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-highlight relative inline-flex h-full w-full rounded-full"></span>
          </span>
          <p className="font-satoshi-regular text-xs">Available for work</p>
        </div>
        <h2 className="[word-spacing:6px] font-clash-medium text-5xl text-center mt-2 mb-6 md:max-w-2/5 leading-[1.2]">
          Let's create your next big idea.
        </h2>
        <Link to="/contact">
          <Button initialText="Contact Me" hoverText="Contact Me" />
        </Link>
        <div className="flex sm:hidden flex-row gap-6 pt-8 text-dim">
          <span>
            <a
              href="https://www.linkedin.com/in/coderguyshubham"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuLinkedin size={20}/>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/CoderGuyShubham"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuGithub size={20} />
            </a>
          </span>
          <span>
            <a
              href="mailto:singhshubham889900@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuMail size={20} />
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col max-w-[1200px] items-center w-full md:flex-row justify-between mt-8">
        <span>
          <p className="font-satoshi-regular text-sm text-dim mb-14 md:text-left sm:mb-0 text-center">
            © 2025 Shubham Singh. All rights reserved.
          </p>
        </span>
        <div className="hidden sm:flex flex-row gap-6 text-dim">
          <span>
            <a
              href="https://www.linkedin.com/in/coderguyshubham"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuLinkedin size={20}/>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/CoderGuyShubham"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuGithub size={20}/>
            </a>
          </span>
          <span>
            <a
              href="mailto:singhshubham889900@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuMail size={20} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
