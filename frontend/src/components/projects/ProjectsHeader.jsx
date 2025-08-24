import ProjectGrid from "@/utilities/ProjectGrid";
import { SparkleIcon } from "lucide-react";
import React from "react";

const ProjectsHeader = () => {
  return (
    <div className="w-full h-full flex-center flex-col px-4 md:px-10 pt-36 md:pt-40">
      <section className="w-full max-w-[1200px]">
        <span>
          <div className="text-highlight flex gap-2 mb-4 items-center">
            <SparkleIcon height={18} width={18} />
            <p className="uppercase font-clash-variable [word-spacing:4px] text-sm">
              My Work
            </p>
          </div>
        </span>
        <span>
          <h1 className="w-full md:w-2/3 lg:w-1/2 [word-spacing:4px] text-5xl font-clash-medium mb-8 leading-[1.2]">
            Creating next level digital products
          </h1>
        </span>
        <ProjectGrid />
      </section>
    </div>
  );
};

export default ProjectsHeader;
