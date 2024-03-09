"use client";

import DetailsInfoCard from "@/components/shared/DetailsInfoCard";
import ConferenceMobileView from "@/components/shared/DetailsInfoCard/ConferenceMobileView";
import ScheduleCard from "@/components/shared/DetailsInfoCard/ScheduleCard";
import Heading from "@/components/shared/Heading";
import { Reorder } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { HiArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";

const sidebarItems = ["organizer", "speakers", "schedule", "sponsors"];

const ConferenceDetails = () => {
  const params: any = useParams();
  const pathname = params?.slug?.replaceAll("-", " ");
  const [selectItem, setSelectItem] = useState<any>("organizer");
  const [dragDrop, setDragDrop] = useState(sidebarItems);

  const handleSelected = (item: any) => {
    setSelectItem(item);
  };

  return (
    <div className="container mx-auto px-5 mb-[100px]">
      <div className="mb-[52px]">
        <Heading
          title={pathname}
          className="mb-2 text-start lg:!text-[40px] md:!text-[32px] !text-[20px]"
        />
        <p className="md:text-xl text-base text-[#0A142FCC]">
          Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
          fermentum.
        </p>
      </div>

      {/*<------ Desktop View Card -------->*/}
      <div className="md:block hidden">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 lg:gap-12 md:gap-8">
          {/*<---------- Left Sidebar Item ----------*/}
          <div className="rounded-lg lg:col-span-2 md:col-span-1">
            <Reorder.Group axis="y" onReorder={setDragDrop} values={dragDrop}>
              {dragDrop?.map((item: any) => (
                <Reorder.Item value={item} key={item}>
                  <div
                    className={`p-2 rounded-md ${
                      selectItem === item
                        ? "bg-secondary text-neutral shadow-lg"
                        : "bg-neutral border border-gray-200 text-primary"
                    } flex items-center gap-2 shadow-sm cursor-move mb-8`}
                    onClick={() => handleSelected(item)}
                  >
                    <div className="flex bg-neutral w-10 h-10 justify-center items-center rounded">
                      <HiArrowNarrowUp className="text-lg text-secondary" />
                      <HiOutlineArrowNarrowDown className="text-lg text-secondary" />
                    </div>

                    <p className="text-base capitalize font-medium">{item}</p>
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>

          {/*<-------- Sections rendering based on selected item ---------->*/}
          <div className="rounded-lg lg:p-[52px] md:p-[20px] lg:col-span-4 md:col-span-2 bg-gray-50 space-y-6">
            {selectItem === "organizer" &&
              [...Array(3)]?.map((_, index: number) => (
                <div key={index}>
                  <DetailsInfoCard
                    img={
                      index === 0
                        ? "/assets/conference/organizer/image-1.png"
                        : index === 1
                        ? "/assets/conference/organizer/image-2.png"
                        : "/assets/conference/organizer/image-3.png"
                    }
                    title={
                      index === 0
                        ? "Siddhartha"
                        : index === 1
                        ? "Candide"
                        : "The Little Prince"
                    }
                    subTitle={
                      index === 0
                        ? "Lorem ipsum dolor sit amet, con sec tetur ad."
                        : index === 1
                        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut."
                    }
                  />
                </div>
              ))}

            {selectItem === "speakers" &&
              [...Array(3)]?.map((_, index: number) => (
                <div key={index}>
                  <DetailsInfoCard
                    socialIcon
                    img={
                      index === 0
                        ? "/assets/conference/speakers/image-1.png"
                        : index === 1
                        ? "/assets/conference/speakers/image-2.png"
                        : "/assets/conference/speakers/image-3.png"
                    }
                    title={
                      index === 0
                        ? "Ronald Richards"
                        : index === 1
                        ? "Jenny Wilson"
                        : "Cameron Williamson"
                    }
                    subTitle={
                      index === 0
                        ? "Lorem ipsum dolor sit amet, con sec tetur ad."
                        : index === 1
                        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut."
                    }
                  />
                </div>
              ))}

            {selectItem === "schedule" &&
              [...Array(2)]?.map((_, index: number) => (
                <div key={index}>
                  <ScheduleCard index={index} />
                </div>
              ))}

            {selectItem === "sponsors" &&
              [...Array(3)]?.map((_, index: number) => (
                <div key={index}>
                  <DetailsInfoCard
                    img={
                      index === 0
                        ? "/assets/conference/sponsors/image-1.png"
                        : index === 1
                        ? "/assets/conference/sponsors/image-2.png"
                        : "/assets/conference/sponsors/image-3.png"
                    }
                    title={
                      index === 0
                        ? "Louis Vuitton"
                        : index === 1
                        ? "MasterCard"
                        : "The Walt Disney Company"
                    }
                    subTitle={
                      index === 0
                        ? "Lorem ipsum dolor sit amet, con sec tetur ad."
                        : index === 1
                        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut."
                    }
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/*<------ Mobile View Card -------->*/}
      <div className="md:hidden block">
        <ConferenceMobileView />
      </div>
    </div>
  );
};

export default ConferenceDetails;
