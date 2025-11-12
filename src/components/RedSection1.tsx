import Image from "next/image";
import React from "react";

const RedSection1 = () => {
  return (
    <div className="p-5  flex flex-col gap-2 py-20 items-stretch text-white bg-linear-to-l from-orange-500-start to-orange-500-end sm:text-center">
      <span className="font-semibold md:text-base text-lg">Best time here</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">
        Better feedback at the right time.
      </h2>
      <div className="grid sm:grid-cols-3 place-items-center gap-10 max-w-280 m-auto items-stretch">
        <Image
          src="/assets/images/feedback-long-img.svg"
          alt="Feature Image"
          width={500}
          height={500}
          className="w-full col-span-3 sm:block hidden "
        />
        <Image
          src="/assets/images/feedback-small.svg"
          alt="Feature Image"
          width={500}
          height={500}
          className="w-full  sm:hidden "
        />
        <Image
          src="/assets/images/mentions-img.svg"
          alt="Feature Image"
          width={500}
          height={500}
          className="w-full  "
        />
        <Image
          src="/assets/images/polls-img.svg"
          alt="Feature Image"
          width={500}
          height={500}
          className="w-full  "
        />
        <Image
          src="/assets/images/resolve-img.svg"
          alt="Feature Image"
          width={500}
          height={500}
          className="w-full  "
        />
      </div>
    </div>
  );
};

export default RedSection1;
