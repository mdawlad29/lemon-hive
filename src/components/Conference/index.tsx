"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React from "react";
import CircleIcon from "../shared/CircleIcon";
import ConferenceCard from "../shared/ConferenceCard";
import ResponsiveCard from "../shared/ConferenceCard/ResponsiveCard";
import TimeCard from "../shared/ConferenceCard/TimeCard";
import Heading from "../shared/Heading";

const Conference = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="lg:mt-[18rem] mb-[100px] flex flex-col justify-evenly items-center">
      <Heading title="conference" className="mb-10" />

      <div className="lg:block hidden space-y-[56px]">
        {[...Array(5)]?.map((_, index: number) => (
          <div key={index}>
            {index === 0 || index === 2 || index === 4 ? (
              <Link href={""} className="flex justify-center">
                <div ref={ref} className="relative">
                  <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[34.8rem] top-11 w-[1.5px] h-full bg-secondary origin-top"
                  />

                  <ConferenceCard
                    title={
                      index === 0
                        ? "Freezing Edge 2023"
                        : index === 2
                        ? "Web Components - Write once & run"
                        : "The weird things about React"
                    }
                    desc={
                      index === 0
                        ? "The edge isn't bleeding, it's freezing!"
                        : index === 2
                        ? "The edge isn't bleeding, it's freezing!"
                        : "Conditional rendering issues in JSX, forwardRef"
                    }
                    className="md:mr-10"
                  />
                </div>
                <CircleIcon reference={ref} />

                <TimeCard
                  className="absolute -left-1 ml-10"
                  title="02 September, 2023"
                />
              </Link>
            ) : index === 1 || index === 3 ? (
              <Link href={""} className="flex justify-center">
                <div ref={ref} className="relative">
                  <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[37rem] top-11 w-[1.5px] h-full bg-secondary origin-top"
                  />
                  <TimeCard
                    className="absolute -right-[2rem]"
                    descType="text-right"
                    title="02 September, 2023"
                  />
                </div>
                <CircleIcon
                  reference={ref}
                  className="absolute left-[41.5rem]"
                />

                <ConferenceCard
                  title={
                    index === 1
                      ? "Design systems for beginners"
                      : "Accessibility testing for developers"
                  }
                  desc="The workshop will provide you with all the basics"
                  className="md:ml-[11.5rem]"
                />
              </Link>
            ) : null}
          </div>
        ))}
      </div>

      <div className="lg:hidden block w-full">
        <ResponsiveCard />
      </div>
    </div>
  );
};

export default Conference;
