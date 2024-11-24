'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Main = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:"ease-in-out",
      mirror:false,
    });
  },[]);
  return (
    <div className="max-w-[1280px] max-h-[700px] flex flex-col lg:flex-row bg-white sm:flex-row ">
      {/* Left Section */}
      <section className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left justify-center px-9 lg:px-12 py-16 lg:py-20 gap-6 lg:gap-10">
        <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl font-bold leading-tight">
          Learn new skills online with ease
        </h1>
        <p data-aos="zoom-in" className="text-sm lg:text-base text-gray-700">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div data-aos="zoom-in" className="flex gap-4">
          <button className="px-6 py-3 rounded-md bg-black text-white text-sm lg:text-base hover:text-black hover:bg-[#0df2c2] transition-all hover:transition-all">
            Start learning now
          </button>
          <button className="px-6 py-3 rounded-md border border-black text-black text-sm lg:text-base capitalize">
            explore more
          </button>
        </div>
      </section>

      {/* Right Section */}
      <section data-aos="fade-left" className="lg:w-1/2 w-full flex items-center justify-center relative">
        <div className="relative w-[434px] h-[530px] md:w-[590px] md:h-[700px] md:ml-12 aspect-square overflow-hidden">
          <Image
            src="/images/Image1.png"
            alt="Learning Image"
            layout="fill"
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Main;
