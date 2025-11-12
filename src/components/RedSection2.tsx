import Image from "next/image";
import React from "react";

const RedSection2 = () => {
  return (
    <div className="px-5  flex flex-col justify-end gap-2 pt-20  text-white  bg-linear-to-l from-orange-500-start to-orange-500-end sm:text-center relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        Keep every one in the loop
      </h2>
      <p className="sm:w-3/5 max-w-100 text-pretty sm:m-auto md:text-lg">
        All good things starts with a homepage. Get inspired without breaking
        your wallet.
      </p>
      <div className=" text-black bg-white p-2 px-5 rounded-full font-medium w-fit sm:m-auto  cursor-pointer my-5">
        Start for free
      </div>
      <div className=" max-w-280 m-auto items-stretch">
        <Image
          src="/assets/images/screen.svg"
          alt="Feature Image"
          width={500}
          height={500}
          className="sm:w-10/12 m-auto "
        />
      </div>
      <div className="overlay block bg-linear-to-b from-10% from-black/0 to-black/50 z-10 absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

export default RedSection2;
