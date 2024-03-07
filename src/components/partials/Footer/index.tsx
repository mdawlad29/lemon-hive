import {
  FacebookIcon,
  FooterLogoIcon,
  LinkedinIcon,
  TwitterIcon,
  WebsiteIcon,
} from "@/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[69px] bg-[#111D5E]">
      <Link href={"/"} className="mb-[78px]">
        <FooterLogoIcon />
      </Link>

      <div className="flex items-center gap-8 mb-6">
        <TwitterIcon />
        <LinkedinIcon />
        <FacebookIcon />
        <WebsiteIcon />
      </div>

      <p className="text-white text-base">
        © 2023 Lemonhive. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
