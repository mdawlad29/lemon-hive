import { FC } from "react";

interface ICardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const SponsorCard: FC<ICardProps> = ({ icon, title, className }) => {
  return (
    <div className="flex items-center">
      {icon}
      <span
        className={`${
          className ? className : ""
        } capitalize text-primary font-semibold md:text-2xl text-xl`}
      >
        {title}
      </span>
    </div>
  );
};

export default SponsorCard;
