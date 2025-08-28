import React from "react";
import AdventureTime from "../../src/assets/AdventureTime.png";
import greenIcon from "../assets/greenIcon.png";
import webThree from "../assets/webthree.png";
import sneakers from "../assets/Sneakers.png";
import viewProject from "../assets/viewProject.png";

const Featured = () => {
  return (
    <div className="layout h-[2418px] ">
      <div className="w-[600px] h-[138px] text-white mt-20">
        <h1 className="text-[76px] font-[400px]">Featured Projects</h1>
        <p style={{ fontFamily: "Manrope" }} className="text-[18px] ">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      <div className="flex justify-between  mt-25 w-[1224px] h-[600px] text-white">
        <div className="w-[600px] ">
          <img src={AdventureTime} alt="" />
        </div>
        <div className="w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div>
              <h1
                style={{ fontFamily: "Manrope" }}
                className="text-[32px] font-[500]"
              >
                Promotional landing page for our favorite show
              </h1>
              <p
                style={{ fontFamily: "Manrope" }}
                className="mt-2 font-[400] text-[18px]"
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>

            <div className="w-[600px] mt-5  ">
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

      <div className="flex justify-between  mt-25 w-[1224px] h-[600px] text-white">
        <div className="w-[600px] ">
          <img src={webThree} alt="" />
        </div>
        <div className="w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div>
              <h1
                style={{ fontFamily: "Manrope" }}
                className="text-[32px] font-[500]"
              >
                Blog site for World News
              </h1>
              <p
                style={{ fontFamily: "Manrope" }}
                className="mt-2 font-[400] text-[18px]"
              >
                Mastered CSS Grid complexities in building an innovative news
                homepage, navigating intricate design decisions for a seamless
                user experience. Leveraged the challenge to enhance skills in
                front-end development.
              </p>
            </div>

            <div className="w-[600px] mt-5  ">
              <h1 style={{ fontFamily: "Manrope" }} className="">
                PROJECT INFO
              </h1>
              <hr className="mt-2" />

              <div
                style={{ fontFamily: "Manrope" }}
                className="flex justify-between mt-2 "
              >
                <h1 style={{ fontFamily: "Manrope" }}>Client</h1>
                <p style={{ fontFamily: "Manrope" }}>World News</p>
              </div>
              <hr className="mt-3" />
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

          <div className="flex justify-start lg:mr-123">
            <img src={viewProject} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-between  mt-25 w-[1224px] h-[600px] text-white">
        <div className="w-[600px] ">
          <img src={sneakers} alt="" />
        </div>
        <div className="w-[600px] flex flex-col mt-12 gap-5 justify-between items-center py-6 ">
          <div>
            <div>
              <h1
                style={{ fontFamily: "Manrope" }}
                className="text-[32px] font-[500]"
              >
                E-commerce product page
              </h1>
              <p
                style={{ fontFamily: "Manrope" }}
                className="mt-2 font-[400] text-[18px]"
              >
                Successfully crafted an engaging product page featuring a
                dynamic lightbox gallery and seamless cart functionality,
                showcasing proficiency in JavaScript development.
              </p>
            </div>

            <div className="w-[600px] mt-5  ">
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
