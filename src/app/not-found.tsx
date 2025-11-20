import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <ModeToggle />
      <div className="p-5 dark:bg-grey-800 flex flex-col gap-5 py-20 items-center text-center">
        <Image
          src="/assets/images/not-found.svg"
          alt="Not Found"
          width={300}
          height={300}
          className=" not-found-img"
        />
        <h2 className="text-orange-500-end text-3xl md:text-4xl lg:text-5xl font-semibold  text-center not-found-text">
          Page not found
        </h2>{" "}
        <p className=" text-sm text-secondary-400 dark:text-grey-400 max-w-100 not-found-text">
          The page you're looking for isn't available. Try to search again or
          use the go back button below.
        </p>
        <Link href={"/"} className="w-full max-w-48 sm:m-auto ">
          <div className="p-2 px-5 bg-linear-to-r  cursor-pointer from-orange-500-start to-orange-500-end w-full rounded-md text-sm text-white font-medium mt-5 not-found-text">
            Start for free
          </div>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
