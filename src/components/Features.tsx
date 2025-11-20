import { Check, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="p-5 dark:bg-grey-800 flex flex-col gap-20 py-20 items-stretch">
      {/* item1  */}
      <div className="grid sm:grid-cols-2 place-items-center gap-10 max-w-280 m-auto items-stretch">
        {/* text-content */}
        <div className="flex flex-col gap-5 order-2 sm:order-1">
          {/* badge */}
          <div className="badge text-xs bg-linear-to-r from-orange-500-start to-orange-500-end text-white w-fit px-3 py-1 rounded-full feature-item">
            Share
          </div>

          <div className="text-pretty">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5  feature-item">
              Share anything you’re working on.
            </h2>{" "}
            <p className=" text-sm text-secondary-400 dark:text-grey-400  feature-item">
              Campsite has been instrumental in keeping designers aware of each
              others' work-in-progress in a way that was previously slowing us
              down. It's also one of the only channels where.
            </p>
          </div>
          <div className=" text-xs text-grey-700 dark:text-white flex gap-5 items-center  feature-item">
            <div className="flex items-center gap-1">
              {" "}
              <div className="h-3 w-3 bg-grey-20 dark:bg-grey-700  flex items-center justify-center rounded-full">
                <Check className="size-2" />
              </div>
              <span>Coded</span>
            </div>
            <div className="flex items-center gap-1">
              {" "}
              <div className="h-3 w-3 bg-grey-20 dark:bg-grey-700  flex items-center justify-center rounded-full">
                <Check className="size-2" />
              </div>
              <span>100% Secure</span>
            </div>
          </div>
          <div className="flex items-center text-xs font-semibold gap-2  feature-item">
            <div className="h-3 w-3 bg-grey-20  flex items-center justify-center rounded-full bg-linear-to-r from-orange-500-start to-orange-500-end ">
              <Play className="size-1 text-white fill-white" />
            </div>
            See how it works
          </div>
        </div>

        {/* image */}
        <div className="bg-outer-bg dark:bg-grey-700  flex items-center justify-center rounded-2xl w-full sm:order-2 h-full">
          <Image
            src="/assets/images/share-light2.png"
            alt="Feature Image"
            width={500}
            height={500}
            className="w-full dark:hidden feature-img"
          />
          <Image
            src="/assets/images/share-dark.png"
            alt="Feature Image"
            width={500}
            height={500}
            className="w-full dark:block hidden feature-img"
          />
        </div>
      </div>

      {/* item 2  */}
      <div className="grid sm:grid-cols-2 place-items-center gap-10 max-w-280 m-auto">
        {/* text-content */}
        <div className="flex flex-col gap-5 order-2">
          {/* badge */}
          <div className="badge text-xs bg-linear-to-r from-orange-500-start to-orange-500-end text-white w-fit px-3 py-1 rounded-full  feature-item2">
            Feedback
          </div>

          <div className="text-pretty">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5  feature-item2">
              Better feedback at the right time.
            </h2>{" "}
            <p className=" text-sm text-secondary-400 dark:text-grey-400  feature-item2">
              Campsite has been instrumental in keeping designers aware of each
              others' work-in-progress in a way that was previously slowing us
              down. It's also one of the only channels where.
            </p>
          </div>

          <div className="flex items-center text-xs font-semibold gap-2  feature-item2">
            <div className="h-3 w-3 bg-grey-20  flex items-center justify-center rounded-full bg-linear-to-r from-orange-500-start to-orange-500-end ">
              <Play className="size-1 text-white fill-white" />
            </div>
            See how it works
          </div>
        </div>

        {/* image */}
        <div className="bg-outer-bg dark:bg-grey-700 flex items-center justify-center rounded-2xl w-full order-1 max-h-110">
          <Image
            src="/assets/images/feedback-light.svg"
            alt="Feature Image"
            width={500}
            height={500}
            className="w-10/12 dark:hidden feature-img2"
          />
          <Image
            src="/assets/images/feedback-dark.svg"
            alt="Feature Image"
            width={500}
            height={500}
            className="w-10/12 dark:block hidden feature-img2"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
