import React from "react";
import Image from "next/image";
const Trust = () => {
  return (
    <div className="bg-[#F7F7F7] h-[208px] overflow-hidden mt-52 sm:mt-0 md:20 max-w-[1260px]">
      <div className="flex flex-col sm:flex-row overflow-hidden">
        <div data-aos="fade-right" className="font-bold md:text-[24px] text-lg leading-7 h-[54px] w-[397px] ml-4 sm:mt-20zzzzzzzz mt-16 overflow-hidden">
          Trusted by 2000+ companies worldwide.
        </div>
        <div data-aos="zoom-in" className="flex flex-row ml-4 gap-3 lg:ml-36 md:ml-9  mb-4 overflow-hidden sm:mt-20">
          <Image
            src={"/images/AirbnbLogo2.png"}
            alt=""
            width={107.15}
            height={33.34}
          />
          <Image
            src={"/images/AirbnbLogo6.png"}
            alt=""
            width={107.15}
            height={33.34}
          />
          <Image
            src={"/images/AirbnbLogo.png"}
            alt=""
            width={107.15}
            height={33.34}
          />
          <Image
            src={"/images/AirbnbLogo3.png"}
            alt=""
            width={107.15}
            height={33.34}
          />
          <Image
            src={"/images/AirbnbLogo5.png"}
            alt=""
            width={107.15}
            height={33.34}
          />
          <Image
            src={"/images/AirbnbLogo4.png"}
            alt=""
            width={107.15}
            height={33.34}
          />
        </div>
      </div>
    </div>
  );
};

export default Trust;
