"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";

interface ICardProps {
  title: string;
  desc: string;
  className?: string;
}

const ResponsiveCard = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      <div ref={ref} className="relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[2.3rem] top-1 w-[1.5px] h-full bg-secondary origin-top"
        />

        <div className="space-y-[40px]">
          {[...Array(5)]?.map((_, index: number) => (
            <Link href={""} key={index}>
              <Details
                title={
                  index === 0
                    ? "Freezing Edge 2023"
                    : index === 1
                    ? "Design systems for beginners"
                    : index === 2
                    ? "Web Components - Write once & run"
                    : index === 3
                    ? "Accessibility testing for developers"
                    : "The weird things about React"
                }
                desc={
                  index === 0
                    ? "The edge isn't bleeding, it's freezing!"
                    : index === 1
                    ? "Design systems for beginners"
                    : index === 2
                    ? "The edge isn't bleeding, it's freezing!"
                    : index === 3
                    ? "Accessibility testing for developers"
                    : "Conditional rendering issues in JSX, forwardRef"
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;

const Details: FC<ICardProps> = ({ title, desc }) => {
  const ref = React.useRef(null);
  return (
    <div
      ref={ref}
      className="first:mt-0 last:mb-0 flex flex-col md:w-[640px] w-[260px] ml-20"
    >
      <CircleIcon reference={ref} />

      <p className={`text-sm text-secondary-50 mb-2`}>02 September, 2023</p>

      <div className="space-y-2 px-[6px] py-[18px] relative bg-neutral rounded-lg border-t-4 border-accent-50 hover:border-secondary duration-300 ease-in-out shadow hover:shadow-md">
        <div className="flex gap-4">
          <div className="w-[16px] h-[16px] bg-secondary rounded-full p-1">
            <div className="w-[7px] h-[7px] bg-neutral rounded-full" />
          </div>

          <div>
            <h1 className="capitalize text-primary font-medium text-lg mb-[10px] leading-[20px]">
              {title}
            </h1>
            <p className="text-sm text-secondary-50">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CircleIcon = ({ reference }: { reference: React.RefObject<any> }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-[#FFC93E]">
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
  );
};
