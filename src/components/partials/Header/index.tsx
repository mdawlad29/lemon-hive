"use client";
import { LogoIcon } from "@/assets";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const menuItems = [
  { label: "About us", link: "/" },
  { label: "What We do", link: "/" },
  { label: "Our work", link: "/" },
  { label: "Blog", link: "/" },
  { label: "Say hi", link: "/" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="px-[27px] container mx-auto flex md:justify-evenly justify-between items-center mt-[44px] mb-[105px]">
        {/* <!-- Logo --> */}
        <Link href="/">
          <LogoIcon />
        </Link>

        {/* <!-- Navigation Menu --> */}
        {menuItems?.map((menu) => (
          <nav key={menu?.label} className="hidden md:flex space-x-[57px]">
            <Link
              href={`${menu?.link}`}
              className="text-[#0A142F] text-[18px] font-medium"
            >
              {menu?.label}
            </Link>
          </nav>
        ))}

        {/* <!-- Mobile Menu Button --> */}
        <IoMenuOutline
          onClick={toggleMobileMenu}
          className="md:block cursor-pointer text-[27px] text-[#0A142F]"
        />
      </header>

      {/* <!-- Mobile Menu --> */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#0A142F] pt-[44px] px-[36px] ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="flex justify-end">
          <IoClose
            className="cursor-pointer text-[27px] text-[#fff]"
            onClick={closeMobileMenu}
          />
        </div>

        {menuItems?.map((menu) => (
          <div key={menu?.label} className="flex flex-col items-center">
            <Link
              href={`${menu?.link}`}
              className="text-[#fff] text-[18px] font-medium py-3"
              onClick={closeMobileMenu}
            >
              {menu?.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
