import {
  CatalogIcon,
  CirclesIcon,
  CirclesIconTwo,
  LayerIcon,
  QuotientIcon,
  SisyphusIcon,
  SisyphusIconTwo,
} from "@/assets";
import Image from "next/image";
import Heading from "../shared/Heading";
import LevelHeading from "../shared/LevelHeading";
import SponsorCard from "../shared/SponsorCard";

const OurSponsor = () => {
  return (
    <div className="text-[red] bg-neutral flex flex-col justify-center items-center py-[100px] space-y-8 px-5">
      <Heading title="our sponsor" />

      {/*<------ Level of Gold ------->*/}
      <>
        <LevelHeading
          icon="/assets/icons/gold-level.png"
          title="gold sponsor"
        />
        <div className="flex items-center justify-center flex-wrap gap-14">
          <SponsorCard icon={<LayerIcon />} title="layers" className="ml-3" />
          <SponsorCard icon={<SisyphusIcon />} title="sisyphus" />
        </div>
      </>

      {/*<------ Level of Silver ------->*/}
      <>
        <LevelHeading
          icon="/assets/icons/silver-level.png"
          title="silver sponsor"
        />
        <div className="flex items-center justify-center flex-wrap gap-14">
          <SponsorCard
            icon={<CirclesIcon />}
            title="circooles"
            className="ml-3"
          />
          <SponsorCard
            icon={<CatalogIcon />}
            title="catalog"
            className="ml-3 !text-bold"
          />
          <Image
            src={"/assets/icons/sponsor.png"}
            alt="Gofore"
            width={200}
            height={48}
          />
        </div>
      </>

      {/*<------ Level of Bronze ------->*/}
      <>
        <LevelHeading
          icon="/assets/icons/bronze-level.png"
          title="bronze sponsor"
        />
        <div className="flex items-center justify-center flex-wrap gap-14">
          <SponsorCard icon={<SisyphusIconTwo />} title="sisyphus" />
          <SponsorCard
            icon={<QuotientIcon />}
            title="quotient"
            className="ml-3 !font-bold"
          />
          <SponsorCard icon={<LayerIcon />} title="layers" className="ml-3" />
          <SponsorCard
            icon={<CirclesIconTwo />}
            title="circooles"
            className="ml-3 !text-accent"
          />
        </div>
      </>
    </div>
  );
};

export default OurSponsor;
