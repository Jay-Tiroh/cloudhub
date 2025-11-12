import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5">
      <div className="flex items-center w-full justify-between text-xs font-medium max-w-280 m-auto">
        <div className="flex items-center justify-between gap-15 w-1/2">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className="w-20 dark:invert"
          />
          <div className="hidden nav-links gap-5 md:flex items-center">
            <span className="nav-link flex items-end gap-1">
              Product <ChevronDown className="size-3" />
            </span>
            <span className="nav-link">Home</span>
            <span className="nav-link">Shop</span>
            <span className="nav-link">Pages</span>
            <span className="nav-link">Integrations</span>
            <span className="nav-link">Developers</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="">Login</span>
          <span className="p-2 px-5 from-orange-500-start to-orange-500-end bg-linear-to-r text-white rounded-full text-nowrap cursor-pointer hover:shadow-md hover:shadow-orange-200/50 transition-all duration-200 ">
            Start for free
          </span>
        </div>
        <Image
          src={"/assets/images/hamburger.svg"}
          width={120}
          height={120}
          alt="menu"
          className="w-6 dark:invert md:hidden hover:stroke-orange-500-end"
        />
      </div>
    </div>
  );
};

export default Navbar;
