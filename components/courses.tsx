import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="flex flex-col gap-9 mt-20 max-w-[1280px] items-center text-center">
      <div data-aos="fade-out" className="flex flex-col gap-6">
        <h2 className="font-bold text-[32px] md:text-[56px] ">Courses</h2>
        <p className="text-[18px] sm:text-[18px]">Your Ultimate Guide</p>
      </div>
      <div className="flex flex-row gap-5 text-[18px] sm:text-[18px]">
        <h5 data-aos="fade-right" className="border-b-3 rounded-sm  border-black">Popular</h5>
        <h5 data-aos="fade-out">Recommended</h5>
        <h5 data-aos="fade-left">Best price</h5>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <div data-aos="fade-left" className="h-[534px] w-[400px] overflow-hidden rounded-lg bg-[#F7F7F7] ">
          <div className="rounded-lg">
            <Image
              src={"/images/Image4.png"}
              alt=""
              width={400}
              height={260}
              className=" rounded-t-md "
            />
          </div>
          <div className="mx-3 text-left flex flex-col gap-5">
            <div className="flex flex-row justify-between mt-3">
              <h5 className="font-semibold text-[14px]">Design</h5>
              <h5 className="flex gap-1">
                <i className="w-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#d9d9d9"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </i>
                <p>5.0</p>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-[24px]">UX/UI Design 201</h5>
              <p className="text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                mollitia at sapiente pariatur.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="px-5 py-2 rounded-md border border-black text-black text-sm lg:text-base capitalize">
                Enroll now
              </button>
              <h4 className="py-2 font-bold">$400</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="h-[534px] w-[400px] overflow-hidden rounded-lg bg-[#F7F7F7] ">
          <div className="rounded-lg">
            <Image
              src={"/images/Image3.png"}
              alt=""
              width={400}
              height={260}
              className=" rounded-t-md"
            />
          </div>
          <div className="mx-3 text-left flex flex-col gap-5">
            <div className="flex flex-row justify-between mt-3">
              <h5 className="font-semibold text-[14px]">Programming</h5>
              <h5 className="flex gap-1">
                <i className="w-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#d9d9d9"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </i>
                <p>5.0</p>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-[24px]">Introduction to python</h5>
              <p className="text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                mollitia at sapiente pariatur.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="px-5 py-2 rounded-md border border-black text-black text-sm lg:text-base capitalize">
                Enroll now
              </button>
              <h4 className="py-2 font-bold">$400</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="h-[534px] w-[400px] overflow-hidden rounded-lg bg-[#F7F7F7] ">
          <div className="rounded-lg">
            <Image
              src={"/images/Image2.png"}
              alt=""
              width={400}
              height={260}
              className=" rounded-t-md"
            />
          </div>
          <div className="mx-3 text-left flex flex-col gap-5">
            <div className="flex flex-row justify-between mt-3">
              <h5 className="font-semibold text-[14px]">Business</h5>
              <h5 className="flex gap-1">
                <i className="w-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#d9d9d9"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </i>
                <p>5.0</p>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-[24px]">
                Data Analysis for Beginners
              </h5>
              <p className="text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                mollitia at sapiente pariatur.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="px-5 py-2 rounded-md border border-black text-black text-sm lg:text-base capitalize">
                Enroll now
              </button>
              <h4 className="py-2 font-bold">$400</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[534px] w-[400px] overflow-hidden rounded-lg bg-[#F7F7F7] hidden sm:block ">
          <div className="rounded-lg">
            <Image
              src={"/images/Image5.png"}
              alt=""
              width={400}
              height={260}
              className=" rounded-t-md"
            />
          </div>
          <div className="mx-3 text-left flex flex-col gap-5">
            <div className="flex flex-row justify-between mt-3">
              <h5 className="font-semibold text-[14px]">Art</h5>
              <h5 className="flex gap-1">
                <i className="w-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#d9d9d9"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </i>
                <p>5.0</p>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-[24px]">Art Specialization</h5>
              <p className="text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                mollitia at sapiente pariatur.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="px-5 py-2 rounded-md border border-black text-black text-sm lg:text-base capitalize">
                Enroll now
              </button>
              <h4 className="py-2 font-bold">$400</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[534px] w-[400px] overflow-hidden rounded-lg bg-[#F7F7F7] hidden sm:block">
          <div className="rounded-lg">
            <Image
              src={"/images/Image6.png"}
              alt=""
              width={400}
              height={260}
              className=" rounded-t-md"
            />
          </div>
          <div className="mx-3 text-left flex flex-col gap-5">
            <div className="flex flex-row justify-between mt-3">
              <h5 className="font-semibold text-[14px]">Law</h5>
              <h5 className="flex gap-1">
                <i className="w-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#d9d9d9"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </i>
                <p>5.0</p>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-[24px]">Rule of Law</h5>
              <p className="text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                mollitia at sapiente pariatur.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="px-5 py-2 rounded-md border border-black text-black text-sm lg:text-base capitalize">
                Enroll now
              </button>
              <h4 className="py-2 font-bold">$400</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="h-[534px] w-[400px] overflow-hidden rounded-lg bg-[#F7F7F7] hidden sm:block">
          <div className="rounded-lg">
            <Image
              src={"/images/Image7.png"}
              alt=""
              width={400}
              height={260}
              className=" rounded-t-md"
            />
          </div>
          <div className="mx-3 text-left flex flex-col gap-5">
            <div className="flex flex-row justify-between mt-3">
              <h5 className="font-semibold text-[14px]">Tech</h5>
              <h5 className="flex gap-1">
                <i className="w-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="#d9d9d9"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                </i>
                <p>5.0</p>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-bold text-[24px]">Introduction to webflow</h5>
              <p className="text-[16px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                mollitia at sapiente pariatur.
              </p>
            </div>
            <div className="flex gap-10">
              <button className="px-5 py-2 rounded-md border border-black text-black text-sm lg:text-base capitalize">
                Enroll now
              </button>
              <h4 className="py-2 font-bold">$400</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button data-aos="fade-out" className=" py-3 mt-9  w-[155px]  rounded-md border border-black text-black text-sm lg:text-base capitalize  ">
          view all courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
