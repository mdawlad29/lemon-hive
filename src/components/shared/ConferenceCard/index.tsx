import React, { FC } from "react";

interface ICardProps {
  title: string;
  desc: string;
  className?: string;
}
const ConferenceCard: FC<ICardProps> = ({ title, desc, className }) => {
  const ref = React.useRef(null);

  return (
    <div
      ref={ref}
      className={`first:mt-0 last:mb-0 ${
        className ? className : ""
      } flex flex-col md:w-[480px] w-[227px]`}
    >
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

export default ConferenceCard;
