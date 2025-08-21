import React from "react";
import { SparkleIcon } from "lucide-react";

const Carousel = ({ title, showIcon=false }) => {
  return (
    <div className="flex-center gap-8 text-carousel-text">
      <h2 className="text-5xl font-clash-medium">{title}</h2>
      {showIcon && <SparkleIcon width={24} height={24} />}
    </div>
  );
};

export default Carousel;
