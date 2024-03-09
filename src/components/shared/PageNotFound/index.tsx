"use client";

import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      <h1 className="text-[#ccc] md:text-[48px] text-[28px] font-extrabold !mb-4">
        Page Not Found
      </h1>

      <p className="text-[#838383] md:text-[18px] text-[16px] md:px-0 px-4 mb-8 text-center md:w-[27rem] w-full">
        We&apos;re sorry, the page you requested could not be found please go
        back to the homepage
      </p>

      <Link
        href="/"
        className="bg-secondary text-[#FEFEFE] text-[16px] font-medium rounded-3xl px-[48px] h-[40px] flex justify-center items-center"
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;
