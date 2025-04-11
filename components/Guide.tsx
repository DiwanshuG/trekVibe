import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We Light the Way
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-32 lg:bold-48 xl:max-w-[390px]">
            So You Can Enjoy Every Step of the Journey.
          </h2>

          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With our app, getting lost is a thing of the past. Offline maps keep
            you on track even when there’s no signal. So grab your gear, call
            your crew, and let’s chase horizons together — through valleys,
            forests, and all the way to the summit.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/xy.png"
          alt="mountain"
          width={875}
          height={550}
          className="w-full object-cover object-center 2xl:rounded-2xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter_black.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Chandrashila Tungnath</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Baniyakund </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
