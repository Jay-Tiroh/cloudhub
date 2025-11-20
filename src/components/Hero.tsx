import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:items-center sm:text-center m-auto font-medium gap-2 p-5 dark:bg-grey-850">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight  max-w-250 hero-title">
        Create, inspect, and apply synthetic surveillance broadly.
      </h1>{" "}
      <p className=" max-w-250 text-secondary-400 md:text-lg hero-subtitle">
        Start with a stunning homepage. Stay motivated without hurting your
        pocket.
      </p>{" "}
      <div className=" p-2 px-5 bg-linear-to-r  cursor-pointer from-orange-500-start to-orange-500-end w-fit sm:m-auto rounded-full text-sm text-white font-medium mt-5 hero-cta">
        Start for free
      </div>{" "}
      <div className="hidden sm:flex gap-1 item-center text-center sm:m-auto text-xs pt-3 hero-tiny-text">
        <span className="text-secondary-300">
          Want to talk or get a live demo?
        </span>{" "}
        <span className="flex items-center text-secondary-500">
          Get in touch <ArrowRight className="size-3" />
        </span>
      </div>
      {/* svg */}
      <div className="stress relative flex items-end justify-center w-full m-auto max-h-100 h-48 sm:h-64 lg:h-fit ">
        <Image
          src="/assets/images/logos-frame.svg"
          alt="Stress"
          width={1500}
          height={1500}
          className="w-full z-20 hero-icons"
        />
        <Image
          src="/assets/images/wings.svg"
          alt="Stress"
          width={1500}
          height={1500}
          className="w-full absolute hero-wings"
        />
      </div>
      <div className="sm:hidden flex gap-1 item-center text-center sm:m-auto text-xs pt-3 mt-5 hero-tiny-text">
        <span className="text-secondary-300">
          Want to talk or get a live demo?
        </span>{" "}
        <span className="flex items-center text-secondary-500">
          Get in touch <ArrowRight className="size-3" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
