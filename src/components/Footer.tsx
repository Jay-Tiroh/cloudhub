import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5 dark:bg-grey-800 flex py-20  flex-col  w-full gap-8 items-center border-t">
      <div className="sm:flex-row px-5 justify-between flex flex-col  w-full  gap-10  text-sm max-w-280">
        <div className=" bg-linear-to-l from-orange-500-start to-orange-500-end flex items-center justify-center w-fit h-fit rounded-lg aspect-square mb-5 footer-img">
          <Image
            src="/assets/images/cube.svg"
            alt="cube"
            width={500}
            height={500}
            className=" p-5 size-20"
          />
        </div>
        <div className=" flex flex-col gap-2 footer-item">
          <h3 className=" text-grey-700 dark:text-white/90 font-semibold">
            Product
          </h3>
          <span className="footer-link"> Features</span>
          <span className="footer-link"> Pricing</span>
          <span className="footer-link"> Changelog</span>
          <span className="footer-link"> Support</span>
        </div>
        <div className="flex flex-col gap-2 footer-item">
          <h3 className="text-grey-700 dark:text-white/90 font-semibold">
            Legal
          </h3>
          <span className="footer-link"> Terms of Privacy</span>
          <span className="footer-link"> Privacy Policy</span>
          <span className="footer-link"> Security</span>
        </div>
        <div className="flex flex-col gap-2 footer-item">
          <h3 className="text-grey-700 dark:text-white/90 font-semibold">
            Company
          </h3>
          <span className="footer-link"> Blog</span>
          <span className="footer-link"> Contact</span>
        </div>
        <div className="flex flex-col gap-2 footer-item">
          <h3 className="text-grey-700 dark:text-white/90 font-semibold">
            Social
          </h3>
          <span className="footer-link"> Dribbble</span>
          <span className="footer-link"> Behance</span>
          <span className="footer-link"> Discord</span>
        </div>
      </div>
      <div className="text-secondary-200 dark:text-grey-400 text-sm footer-item">
        All rights reserved.© 2024 DejectStudio
      </div>
    </div>
  );
};

export default Footer;
