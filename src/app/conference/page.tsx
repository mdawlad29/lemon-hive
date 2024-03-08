import dynamic from "next/dynamic";

const Conference = dynamic(() => import("@/components/Conference"));

const ConferencePage = () => {
  return (
    <>
      <Conference />
    </>
  );
};

export default ConferencePage;
