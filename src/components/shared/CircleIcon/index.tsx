"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";

const CircleIcon = ({
  reference,
  className,
}: {
  reference: React.RefObject<any>;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <div className={`${className ? className : ""}`}>
      <figure className="stroke-[#FFC93E]">
        <svg
          className="-rotate-90"
          width={"75"}
          height={"75"}
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy={"50"}
            r={"20"}
            className="stroke-[#CDCDCD] stroke-2 fill-none"
          />

          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx="75"
            cy={"50"}
            r={"20"}
            className="stroke-[4px] fill-[#F9FAFB]"
          />

          <image
            href="/assets/icons/conference-icon.svg"
            x="65"
            y="40"
            width="20"
            height="20"
            className="stroke-[#FFC93E] fill-[#FFC93E]"
          />
        </svg>
      </figure>
    </div>
  );
};

export default CircleIcon;
