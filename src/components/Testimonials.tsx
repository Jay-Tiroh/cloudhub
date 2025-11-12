import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="p-8 bg-outer-bg2 dark:bg-grey-800 flex flex-col gap-10 py-20 items-stretch">
      {/* item1  */}
      <div className="grid lg:grid-cols-2 place-items-center gap-10 max-w-280 m-auto items-stretch text-sm md:text-lg text-pretty">
        <div className=" flex flex-col w-full h-full gap-8 text-grey-750 dark:text-white/90 max-w-180 md:w-11/12">
          <Image
            src="/assets/images/stack.svg"
            alt="Patreon"
            width={100}
            height={100}
            className="size-18"
          />
          <p className="text-lg  ">
            Cloudhub has emerged as an essential asset for the team at Patreon
            design. Amidst an accelerated expanding organization in which the
            product undergoes rapid changes, Campsite enables us to maintain
            visibility on what's transpiring across various teams — impeccably
            aligning with our pre-existing procedures.
          </p>{" "}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/gabriel.png"
              alt="Gabriel Valdivia"
              width={240}
              height={240}
              className="size-12"
            />
            <div className="flex flex-col">
              <span className="font-semibold">Gabriel Valdivia </span>
              <span className="text-secondary-600 dark:text-grey-400 text-sm">
                Principal Product Designer, Patreon
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-full gap-8 text-grey-750 dark:text-white/90 max-w-180 md:w-11/12">
          <Image
            src="/assets/images/star.svg"
            alt="star"
            width={100}
            height={100}
            className="size-18"
          />
          <p className="text-lg">
            Cloudhub has demonstrated exceptional worth in preserving open
            communication among designers regarding their current endeavors, a
            challenge that previously impeded our progress. It continually
            stands as a distinctive platform guiding our dialogue towards
            imagination and consistent review, an element I highly value.
            Moreover, it has accelerated our propensity for early-stage feedback
            beyond my expectations.
          </p>{" "}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/buzz.png"
              alt="Buzz Usborne"
              width={240}
              height={240}
              className="size-12"
            />
            <div className="flex flex-col">
              <span className="font-semibold">Buzz Usborne </span>
              <span className="text-secondary-600 dark:text-grey-400 text-sm">
                Principal Designer, Buildkite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
