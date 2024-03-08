import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/Hero"));
const Conference = dynamic(() => import("@/components/Conference"));
const OurSponsor = dynamic(() => import("@/components/OurSponsor"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <Conference />
      <OurSponsor />
    </>
  );
}
