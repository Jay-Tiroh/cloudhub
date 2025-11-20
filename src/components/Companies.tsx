import Image from "next/image";
import React from "react";

const Companies = () => {
  const companies = [
    "patreon",
    "airbnb",
    "fiberplane",
    "coinbase",
    "griffin",
    "helpscout",
    "plaid",
  ];
  return (
    <div className="w-full dark:bg-black flex justify-center">
      <div className="flex flex-wrap justify-center items-center gap-10 my-10 px-5 company-container">
        {companies.map((company) => (
          <div key={company} className="flex items-center company">
            <Image
              src={`/assets/images/${company}.svg`}
              alt={company}
              width={150}
              height={150}
              className="w-20 dark:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
