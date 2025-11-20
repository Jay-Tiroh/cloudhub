import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="p-5">
      <div className="flex items-center w-full justify-between text-xs font-medium max-w-280 m-auto ">
        <div className="flex items-center justify-between gap-15 w-1/2 nav-item">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className="max-w-30 w-full dark:invert"
          />

          <div className="hidden nav-links gap-5 md:flex items-center nav-item">
            <span className="nav-link flex items-end gap-1">
              Product <ChevronDown className="size-3" />
            </span>
            <Link href={"/"} className="nav-link">
              Home
            </Link>
            <Link href={"/shop"} className="nav-link">
              Shop
            </Link>
            <Link href={"/pages"} className="nav-link">
              Pages
            </Link>
            <Link href={"/integrations"} className="nav-link">
              Integrations
            </Link>
            <Link href={"/developers"} className="nav-link">
              Developers
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5 lg:gap-8 nav-item">
          <span className="">Login</span>
          <span className="p-2 px-5 from-orange-500-start to-orange-500-end bg-linear-to-r text-white rounded-full text-nowrap cursor-pointer hover:shadow-md hover:shadow-orange-200/50 transition-all duration-200 ">
            Start for free
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden nav-item">
            <Image
              src={"/assets/images/hamburger.svg"}
              width={120}
              height={120}
              alt="menu"
              className="w-6 dark:invert md:hidden hover:stroke-orange-500-end outline-0!"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="">
              <span className="nav-link flex items-end gap-1 hover:text-orange-500-end transition-colors duration  cursor-pointer">
                Product <ChevronDown className="size-3" />
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/"} className="nav-link">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/shop"} className="nav-link">
                Shop
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/pages"} className="nav-link">
                Pages
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/integrations"} className="nav-link">
                Integrations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/developers"} className="nav-link">
                Developers
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
