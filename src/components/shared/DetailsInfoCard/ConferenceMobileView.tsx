import { Reorder } from "framer-motion";
import { useState } from "react";
import { HiArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";
import DetailsInfoCard from ".";
import ScheduleCard from "./ScheduleCard";

const sidebarItems = ["organizer", "speakers", "schedule", "sponsors"];

const ConferenceMobileView = () => {
  const [selectItem, setSelectItem] = useState<any>("organizer");
  const [dragDrop, setDragDrop] = useState(sidebarItems);

  const handleSelected = (item: any) => {
    setSelectItem((prevItem: any) => (prevItem === item ? null : item));
  };

  return (
    <div className="rounded-lg">
      <Reorder.Group axis="y" onReorder={setDragDrop} values={dragDrop}>
        {dragDrop?.map((item) => (
          <Reorder.Item value={item} key={item}>
            <div className="relative">
              <div
                className={`p-2 rounded-md ${
                  selectItem === item
                    ? "bg-secondary text-neutral"
                    : "bg-neutral border border-gray-200 text-primary"
                } flex items-center gap-2 shadow-sm cursor-pointer mb-8`}
                onClick={() => handleSelected(item)}
              >
                <div className="flex bg-neutral w-10 h-10 justify-center items-center rounded">
                  <HiArrowNarrowUp className="text-lg text-secondary" />
                  <HiOutlineArrowNarrowDown className="text-lg text-secondary" />
                </div>

                <p className="text-base capitalize font-medium">{item}</p>
              </div>

              {/*<-------- Sections rendering based on selected item ---------->*/}
              <div
                className={`${
                  selectItem === item ? "block" : "hidden"
                }  rounded-lg p-3 bg-gray-50 space-y-6 mt-4`}
              >
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
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default ConferenceMobileView;
