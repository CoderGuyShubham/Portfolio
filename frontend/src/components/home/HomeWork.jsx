import React from "react";
import { SparkleIcon } from "lucide-react";
import ProjectGrid from "../../utilities/ProjectGrid";
import Button from "../../utilities/Button";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="w-full flex-center flex-col px-4 md:px-10">
      <div className="max-w-[1200px]">
        <span>
          <div className="flex gap-2 text-highlight">
            <SparkleIcon width={18} height={18}/>
            <p className="uppercase font-clash-variable [word-spacing:4px] text-sm">
              My Work
            </p>
          </div>
        </span>
        <span>
          <h2 className="font-clash-medium text-5xl mt-4">Selected Projects</h2>
        </span>
        <span>
          <p className="font-satoshi-regular mt-2">
            Here's a curated selection showcasing my expertise and the achieved
            results.
          </p>
        </span>
        <ProjectGrid />
        <span className="flex justify-center mt-0 md:mt-4">
          <Link to="/projects">
            <Button initialText="View All Projects" hoverText="View All Projects" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Work;
