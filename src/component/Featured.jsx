import React from "react";
import AdventureTime from "../../src/assets/AdventureTime.png";
import greenIcon from "../assets/greenIcon.png";
import webThree from "../assets/webthree.png";
import sneakers from "../assets/Sneakers.png";
import viewProject from "../assets/viewProject.png";

const Featured = () => {
  return (
    <div className="layout  ">
      <div className="  mt-[500px]  lg:w-[600px]  text-white lg:mt-20">
        <h1 className="text-[50px] lg:text-[76px] font-[400px]">
          Featured Projects
        </h1>
        <p
          style={{ fontFamily: "Manrope" }}
          className="text-[18px] text-[#c7c7c7] "
        >
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-[100px]  lg:mt-25 lg:w-[1224px] text-white ">
        <div className="lg:w-[600px] ">
          <img src={AdventureTime} alt="" />
        </div>
        <div className=" lg:w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div className="lg:w-[600px] lg:mt-5  ">
              <div className="">
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="text-[26px] lg:text-[32px] font-[500]"
                >
                  Promotional landing page for our favorite show
                </h1>
                <p
                  style={{ fontFamily: "Manrope" }}
                  className=" lg:mt-2 font-[400] lg:text-[18px] text-[#c7c7c7] my-5 lg:my-0 "
                >
                  Teamed up with a designer to breathe life into a promotional
                  webpage for our beloved show, Adventure Time. Delivered a
                  fully responsive design with dynamic content capabilities,
                  seamlessly integrating a newsletter feature to keep fans
                  updated with the latest adventures.
                </p>
              </div>

              <h1 style={{ fontFamily: "Manrope" }} className="">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Year</h1>
                <p style={{ fontFamily: "Manrope" }}>2023</p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-4 ">
                <h1 style={{ fontFamily: "Manrope" }}>Role</h1>
                <p style={{ fontFamily: "Manrope" }}>Front-end Developer</p>
              </div>
              <hr className="mt-3" />
            </div>
          </div>

          <div className="flex justify-start lg:mr-80">
            <img src={greenIcon} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center  mt-25 lg:w-[1224px] text-white">
        <div className="lg:w-[600px] ">
          <img src={webThree} alt="" />
        </div>
        <div className="lg:w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div className="lg:w-[600px] mt-5  ">
              <div>
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="text-[26px] lg:text-[32px] font-[500]"
                >
                  Blog site for World News
                </h1>
                <p
                  style={{ fontFamily: "Manrope" }}
                  className="lg:mt-2 font-[400] text-[#c7c7c7] lg:text-[18px] my-5 lg:my-0"
                >
                  Mastered CSS Grid complexities in building an innovative news
                  homepage, navigating intricate design decisions for a seamless
                  user experience. Leveraged the challenge to enhance skills in
                  front-end development.
                </p>
              </div>
              <h1 style={{ fontFamily: "Manrope" }} className="mt-10 lg:mt-0">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Client</h1>
                <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                  World News
                </p>
              </div>
              <hr className="mt-3" />
              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Year</h1>
                <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                  2022
                </p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-4 ">
                <h1 style={{ fontFamily: "Manrope" }}>Role</h1>
                <p style={{ fontFamily: "Manrope" }} className="text-[#c7c7c7]">
                  Front-end Developer
                </p>
              </div>
              <hr className="mt-3" />
            </div>
          </div>

          <div className="flex justify-start lg:mr-123">
            <img src={viewProject} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center  mt-25 lg:w-[1224px] text-white">
        <div className="lg:w-[600px] ">
          <img src={sneakers} alt="" className="" />
        </div>
        <div className="lg:w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div className="lg:w-[600px] mt-5  ">
              <div>
                <h1
                  style={{ fontFamily: "Manrope" }}
                  className="text-[26px] lg:text-[32px] font-[500]"
                >
                  E-commerce product page
                </h1>
                <p
                  style={{ fontFamily: "Manrope" }}
                  className="lg:mt-2 font-[400] text-[#c7c7c7] lg:text-[18px] my-8 lg:my-0 "
                >
                  Successfully crafted an engaging product page featuring a
                  dynamic lightbox gallery and seamless cart functionality,
                  showcasing proficiency in JavaScript development.
                </p>
              </div>
              <h1 style={{ fontFamily: "Manrope" }} className="">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Year</h1>
                <p style={{ fontFamily: "Manrope" }}>2022</p>
              </div>
              <hr className="mt-3" />

              <div className="flex justify-between mt-4 ">
                <h1 style={{ fontFamily: "Manrope" }}>Role</h1>
                <p style={{ fontFamily: "Manrope" }}>Front-end Developer</p>
              </div>
              <hr className="mt-3" />
            </div>
          </div>

          <div className="flex justify-start lg:mr-80">
            <img src={greenIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
