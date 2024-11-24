import React from "react";
import Image from "next/image";
const ExploreCourses = () => {
  return (
    <div className="flex flex-col max-w-[1260px]">
      <div data-aos="zoom-in" className="flex flex-col text-center mt-20 mb-20 gap-9 px-6">
        <h2 className="font-bold text-[32px] leading-[41px]">
          Explore Courses by category
        </h2>
        <p className="font-normal text-lg leading-7">
          Discover a wide range of courses covering a variety of subject, taught
          by expert instructors.
        </p>
      </div>
      <div className="flex flex-wrap justify-center px-5 gap-6">
        <div data-aos="fade-right" className="bg-[#F7F7F7] rounded-lg h-28 flex gap-5 w-[384px] ">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/pen-tool-2.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div  className="flex-col flex justify-center">
          <h3 className="font-bold">Design & Development</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-right" className="bg-[#F7F7F7] rounded-lg h-28 flex gap-5 w-[384px] ">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/volume-high@2x.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Marketing</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-right" className="bg-[#F7F7F7] rounded-lg h-28 flex gap-5 w-[384px] ">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/group.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Development</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-in" className="bg-[#F7F7F7] first-letter:rounded-lg h-28  gap-5 w-[384px] hidden sm:flex ">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/microphone.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Communication</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-in" className="bg-[#F7F7F7] rounded-lg h-28  gap-5 w-[384px] hidden sm:flex">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/link.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Digital Marketing</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-in" className="bg-[#F7F7F7] rounded-lg h-28  gap-5 w-[384px] hidden sm:flex">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/arrow-2.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Self Development</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-left" className="bg-[#F7F7F7] rounded-lg h-28  gap-5 w-[384px] hidden sm:flex">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/briefcase.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Business</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-left" className="bg-[#F7F7F7] rounded-lg h-28  gap-5 w-[384px] hidden sm:flex">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/book.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Finance</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
        <div data-aos="fade-left" className="bg-[#F7F7F7] rounded-lg h-28  gap-5 w-[384px] hidden sm:flex ">
          <div className="bg-white rounded-lg px-8 pt-8 mt-3 mb-[10px] ml-2 ">
            <Image
              src={"/images/book2.png"}
              alt=""
              width={30}
              height={40}
            ></Image>
          </div>
          <div className="flex-col flex justify-center">
          <h3 className="font-bold">Consulting</h3>
          <p>50+ Courses Avaliable</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-in" className="flex flex-row items-center justify-center">
          <button className=" py-3 mt-9  w-[155px]  rounded-md border border-black text-black text-sm lg:text-base capitalize  ">
            view all courses
          </button>
      </div>
    </div>
  );
};

export default ExploreCourses;
