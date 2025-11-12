import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <div className="p-5 dark:bg-grey-800 flex flex-col gap-5 py-20 items-center text-center ">
      <div className=" bg-linear-to-l from-orange-500-start to-orange-500-end flex items-center justify-center w-fit rounded-lg aspect-square mb-5">
        <Image
          src="/assets/images/cube.svg"
          alt="cube"
          width={500}
          height={500}
          className=" p-5 size-20"
        />
      </div>
      <h3 className=" text-grey-750 dark:text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
        Increase your team’s visibility and alignment
      </h3>{" "}
      <p className="text-secondary-500 dark:text-grey-400">
        Start for free, flexible for all teams.
      </p>{" "}
      <div className="flex items-center gap-5 text-sm">
        <span className="text-grey-700 dark:text-white">Request a demo</span>{" "}
        <div className=" text-white bg-linear-to-l from-orange-500-start to-orange-500-end  p-2 px-5 rounded-full font-medium w-fit sm:m-auto  cursor-pointer my-5">
          Start for free
        </div>
      </div>
    </div>
  );
};

export default LastSection;
