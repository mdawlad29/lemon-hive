import dynamic from "next/dynamic";
const ConferenceDetails = dynamic(
  () => import("@/components/Conference/Details")
);

const DetailsPage = () => {
  return (
    <>
      <ConferenceDetails />
    </>
  );
};

export default DetailsPage;
