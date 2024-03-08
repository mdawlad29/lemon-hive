import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <>
      <Image
        className="absolute top-0 left-0"
        src={"/assets/hero-section/to-bg.png"}
        width={290}
        height={228}
        alt="To-bg"
      />

      <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-1 gap-11 lg:px-24 px-5">
        {/*<------ Left Info ------>*/}
        <div className="relative lg:mt-36 lg:order-1 order-3 lg:col-span-2 md:col-span-3 col-span-1 md:mb-0 mb-[19rem]">
          <Image
            className="absolute left-0 top-0 z-20 lg:w-[329px] lg:h-[419px] md:h-[348px] md:w-full w-[157px] h-[200px] lg:object-contain"
            src={"/assets/hero-section/hero-left-img.png"}
            alt="Hero Image"
            width={329}
            height={419}
          />

          <Image
            className="absolute lg:-bottom-[12rem] lg:-right-[5.75rem] right-[11rem] -bottom-[16.25rem] object-contain z-0 md:w-[196px] md:h-[189px] w-[130px] h-[130px] lg:block md:hidden block"
            src={"/assets/hero-section/round-hero-img.png"}
            alt="Hero Image"
            width={196}
            height={189}
          />

          <Image
            className="absolute -right-[1rem] -bottom-[10.25rem] md:hidden block"
            src={"/assets/hero-section/round-hero-two-img.png"}
            alt="Hero Image"
            width={60}
            height={60}
          />
        </div>

        {/*<------ Middle Info ------>*/}
        <div className="relative order-1 lg:col-span-3 md:col-span-6 col-span-1">
          <div className="relative">
            <Image
              className="absolute lg:left-[5px] lg:-top-[3.8rem] md:left-[26rem] md:-top-[3.8rem] right-[6.50rem] -top-[3.50rem]"
              src={"/assets/hero-section/hero-top-icon.png"}
              alt="Hero Image"
              width={85}
              height={82}
            />

            <h1 className="absolute top-0 right-0 lg:text-[114px] md:text-[90px] text-[48px] lg:leading-[90px] md:leading-[70px] leading-[55px] text-primary font-bold text-right capitalize z-20">
              react <br /> conference
            </h1>
          </div>

          <p className="text-lg text-[#000] text-justify lg:mt-52 md:mt-44 mt-36 mb-12">
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum..id fermentum.In quis diam turpis quam id fermentum.
          </p>

          <div className="flex lg:justify-start justify-center items-center">
            <Link
              href={"/"}
              className="bg-secondary py-4 md:w-[293px] w-[177px] rounded-full flex justify-center items-center"
            >
              buy tickets <GoArrowUpRight />
            </Link>
          </div>

          <div className="lg:block hidden">
            <div className="flex items-center gap-2 rotate-90 absolute right-0 -bottom-[6rem]">
              <p className="text-primary text-[14px] rotate-180">Scroll Down</p>
              <Image
                className="-rotate-90"
                src={"/assets/hero-section/hero-arrow-icon.jpg"}
                width={16}
                height={16}
                priority
                alt=""
              />
            </div>
          </div>
        </div>

        {/*<------ Right Info ------>*/}
        <div className="relative lg:mt-[8rem] lg:order-3 order-2 lg:col-span-3 md:col-span-3 col-span-1 lg:mb-0 mb-[24rem]">
          <Image
            className="absolute md:-top-[23.75rem] md:-right-[25rem] -top-[25.75rem] -right-[1rem] lg:hidden block"
            src={"/assets/hero-section/hero-bg-two.png"}
            alt="Hero Image"
            width={342}
            height={432}
          />

          <Image
            className="absolute lg:-left-[10.75rem] lg:-top-[8.75rem] z-0 lg:h-[560px] lg:block hidden"
            src={"/assets/hero-section/hero-bg.png"}
            alt="Hero Image"
            width={940}
            height={832}
          />

          <Image
            src={"/assets/hero-section/hero-right-img.png"}
            alt="Hero Image"
            width={549}
            height={559}
            className="absolute left-0"
          />

          <Image
            className="absolute lg:-bottom-[8.7rem] lg:-left-6 -bottom-[25rem] -right-[1.25rem] md:w-[60px] md:h-[60px] w-[94px] h-[94px] lg:block md:hidden block"
            src={"/assets/hero-section/star.png"}
            alt="Hero Image"
            width={60}
            height={60}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
