import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/Hero"));

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
