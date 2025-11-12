import Image from "next/image";
import React from "react";

const Archive = () => {
  return (
    <div className="p-5 dark:bg-grey-800 flex flex-col gap-10 py-20 items-stretch">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-center">
        Your Archive of progress
      </h2>
      {/* item1  */}
      <div className="grid sm:grid-cols-2 place-items-center gap-10 max-w-280 m-auto items-stretch text-sm md:text-lg">
        <div className="bg-outer-bg dark:bg-grey-700 flex flex-col p-5 pb-0 rounded-2xl w-full h-full items-center justify-between border dark:border-white/5 border-black/5 ">
          <div className="text-center mt-5">
            <h5 className="font-semibold text-grey-750 dark:text-white ">
              Projects
            </h5>{" "}
            <span className="dark:text-grey-300 text-secondary-500">
              Organize, follow, and archive.
            </span>
          </div>
          <Image
            src={"/assets/images/overview-dark.svg"}
            alt="Overview Image"
            width={500}
            height={500}
            className="w-full hidden dark:block"
          />
          <Image
            src={"/assets/images/overview.svg"}
            alt="Overview Image"
            width={500}
            height={500}
            className="w-full dark:hidden"
          />
        </div>
        <div className="bg-outer-bg dark:bg-grey-700 flex flex-col p-5 pb-0 rounded-2xl w-full  items-center justify-between  border dark:border-white/5 border-black/5 ">
          <div className="text-center mt-5">
            <h5 className="font-semibold text-grey-750 dark:text-white ">
              Member profiles
            </h5>{" "}
            <span className="dark:text-grey-300 text-secondary-500">
              Automatic portfolios of your work.
            </span>
          </div>
          <Image
            src={"/assets/images/leads-dark.svg"}
            alt="Leads Image"
            width={500}
            height={500}
            className="w-full hidden dark:block"
          />
          <Image
            src={"/assets/images/leads.svg"}
            alt="Leads Image"
            width={500}
            height={500}
            className="w-full dark:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
