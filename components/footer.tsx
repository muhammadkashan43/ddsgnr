import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="max-w-[1260px] flex justify-center items-center mt-28 ">
      <div className="xl:w-[1120px] sm:w-[90%]">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div data-aos="fade-left" className="flex flex-col items-center gap-4 sm:gap-0 sm:items-start">
            <h5 className="font-semibold text-lg">
              Subscribe to our newsletter
            </h5>
            <p className="font-normal text-base w-[287px] sm:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div data-aos="fade-right" className="">
            <div className="flex gap-2 mt-4 items-center flex-col sm:flex-row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none   hover:border-[#0df2c2]"
                required
              />
              <button className="px-40 sm:px-6 h-12 mt-2 rounded-lg bg-black text-white text-sm lg:text-base hover:text-black hover:bg-[#0df2c2] transition-all hover:transition-all">
                Subscribe
              </button>
            </div>
            <div className=" mr-9 mt-2 text-[13px] sm:text-[14px]">
              By subscribing you agree to with our <u>Privacy policy</u>
            </div>
          </div>
        </div>
        <div>
          <div className="h-1/2 w-full mt-14 flex sm sm:flex-row flex-col justify-around flex-wrap items-center sm:items-start text-center">
            <div data-aos="fade-left" className="p-5 sm:-ml-9">
              <ul>
                <Image
                  src={"/images/logo.png"}
                  alt=""
                  height={60}
                  width={140}
                />
              </ul>
            </div>
            <div data-aos="fade-right" className="p-5">
              <ul>
                <p className="text-black font-semibold text-xl pb-4">Courses</p>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Business
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Development
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Technology
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Design
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Programming
                </li>
              </ul>
            </div>
            <div data-aos="fade-right" className="p-5">
              <ul>
                <p className="text-black  font-semibold text-xl pb-4">
                  Resources
                </p>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Career
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Resume
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Learning
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Interview Preparation
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Jobs
                </li>
              </ul>
            </div>
            <div data-aos="fade-right" className="p-5">
              <ul>
                <p className="text-black font-semibold text-xl pb-4">
                  About Us
                </p>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Contact
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Help/Support
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  FAQ
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Terms and conditions
                </li>
                <li className="text-gray-600 text-md pb-3 cursor-pointer">
                  Parteners
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center border-t mt-10 border-black">
            <div className="flex flex-row text-sm justify-center items-center gap-7 p-5">
              <div  className="flex flex-col items-center md:flex-row gap-2 ">
                <h1 className="">© 2021-2022 All rights reserved</h1>
                <div className="flex gap-5">
                  <p className="">
                    <u>Privacy Policy</u>
                  </p>
                  <p className="">
                    <u>Terms of Services</u>
                  </p>
                  <p className="">
                    <u>Cookies Setting</u>
                  </p>
                </div>
                <div className="flex h-[24px] sm:hidden w-[132px] gap-3 items-center mt-3  flex-wrap justify-end">
                  {/* Icons */}
                  <i>
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      width="22px"
                      viewBox="0 0 320 512"
                      fill="black"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </i>
                  <i>
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      width="22px"
                      viewBox="0 0 512 512"
                      fill="black"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </i>
                  <i>
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="22px"
                      width="22px"
                      fill="black"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </i>
                  <i>
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="22px"
                      width="22px"
                      fill="black"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </i>
                </div>
              </div>
              <div className=" ml-80 h-[24px] hidden sm:flex w-[132px] gap-3 items-center mt-3   justify-end">
                {/* Icons */}
                <i>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22px"
                    width="22px"
                    viewBox="0 0 320 512"
                    fill="black"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </i>
                <i>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    height="22px"
                    width="22px"
                    viewBox="0 0 512 512"
                    fill="black"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </i>
                <i>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="22px"
                    width="22px"
                    fill="black"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </i>
                <i>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="22px"
                    width="22px"
                    fill="black"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
