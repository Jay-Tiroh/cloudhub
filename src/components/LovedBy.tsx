import Image from "next/image";
import React from "react";

const LovedBy = () => {
  const logos = [
    "crowdstrike",
    "airbus",
    "hays",
    "sentry",
    "medwing",
    "cathay",
    "liquid",
    "autotrader",
  ];
  return (
    <div className="p-5 dark:bg-grey-800 flex flex-col gap-10 py-20 items-stretch">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-center">
        Integrations Loved By Designers At
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-10 max-w-280 m-auto items-stretch text-sm md:text-lg">
        {logos.map((logo, i) => (
          <div
            className="bg-outer-bg dark:bg-grey-700  flex items-center justify-center rounded-2xl w-full sm:order-2 h-full px-5 shadow-sm dark:shadow-grey-300/10"
            key={i}
          >
            <Image
              src={`/assets/images/${logo}.svg`}
              alt={logo}
              width={100}
              height={100}
              className="w-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LovedBy;
