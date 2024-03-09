import {
  GithubIcon,
  LinkedinIconTwo,
  TwitterIcon,
  WebsiteIcon,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  socialIcon?: boolean;
  img: string;
  title: string;
  subTitle: string;
}

const DetailsInfoCard: FC<IProps> = ({ socialIcon, title, subTitle, img }) => {
  return (
    <div className="flex items-center md:gap-10 gap-3 rounded-lg bg-white shadow-sm md:py-4 md:pl-4 md:pr-10 p-2">
      <Image
        src={img}
        width={140}
        height={140}
        alt="Organizer Image"
        className="object-contain overflow-hidden"
      />

      <div className="w-full">
        <div className="flex justify-between gap-1 flex-wrap md:mb-4 mb-2">
          <h1 className="text-primary text-xl font-bold leading-[24px]">
            {title}
          </h1>

          {/*<------ Social Icon ------>*/}
          {socialIcon && (
            <div className="flex  items-center gap-4">
              <Link href={""}>
                <TwitterIcon fillColor="#CDCDCD" />
              </Link>
              <Link href={""}>
                <LinkedinIconTwo />
              </Link>
              <Link href={""}>
                <WebsiteIcon fillColor="#CDCDCD" />
              </Link>
              <Link href={""}>
                <GithubIcon />
              </Link>
            </div>
          )}
        </div>

        <p className="text-justify text-[#0A142FCC] text-sm">{subTitle}</p>
      </div>
    </div>
  );
};

export default DetailsInfoCard;
